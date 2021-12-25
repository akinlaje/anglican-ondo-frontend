import { useState, useEffect, createRef } from 'react';
import styles from './TimePicker.module.css';
import Selectbox from '../Selectbox/Selectbox';
// import { DateTime } from 'luxon';

const TimePicker = ({ value, onChange, className, label, setTime }) => {
	const [refs] = useState([createRef(), createRef()]); 
	const [timeValues, setTimeValues] = useState(Array(2).fill(''));
	const [timePeriod, setTimePeriod] = useState({ display: 'AM', id: 'am' });

	const ALLOWED_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	const placeholders = ['hh', 'mm'];

	useEffect(() => {
		let [hour, minute] = timeValues;
		if (!hour.length || !minute.length || !timePeriod?.id) return
		if (timePeriod.id === 'pm') hour = Number(hour) + 12;
		// const date = DateTime.fromObject({
		// 	hour,
		// 	minute
		// }).toJSDate();
		// console.log(date);
		setTime({
			hour,
			minute
		});
	}, [timeValues, setTime, timePeriod])

	const setTimeValue = (i, value) => {
		let valid = false;
		if (i === 0) valid = Number(value) < 13;
		if (i === 1) valid = Number(value) < 60;
		if (!valid) return
		setTimeValues(timeValues => timeValues.map((n, index) => i === index ? value : n));
	}

	const deleteStringCharAtIndex = (str, i) => {
		const tmp = str.split('');
		tmp.splice(i, 1);
		return tmp.join('');
	}

	const inputs = refs.map((n, i) => {
		const onKeyDown = e => {
			const { target: { selectionStart }, key } = e
			// console.log('Value: ', value, 'Key: ', key);
			if (key === 'Backspace') {
				const caretPosition = selectionStart;
				if (caretPosition > 0 && timeValues[i].length > 0) {
					setTimeValue(i, deleteStringCharAtIndex(timeValues[i], caretPosition - 1))
				}

				if (caretPosition === 0 && i > 0) {
					refs[i - 1].current.focus()
				} else return
			} else {
				if (!ALLOWED_KEYS.includes(key)) return 
				// if there is already a value in this field
				// and this is not the last field focus the next field
				if (timeValues[i].length < 2) {
					setTimeValue(i, timeValues[i] + key);
				} else if (timeValues[i].length === 2 && i === 0) {
					setTimeValue(i + 1, key);
					refs[i + 1].current.focus();
					return;
				}
			}
		}

		const onChange = e => {
			const { value } = e.target
			const char = value[value.length - 1]
			// console.log(value, ALLOWED_KEYS.includes(char), timeValues[i].length > 1);
			if (char && !ALLOWED_KEYS.includes(char)) return
			if (timeValues[i].length > 1) {
			// use the next field if this input already has a value 
			// and is'nt the last input
				e.preventDefault()
			}
		}
		return (
			<input
				ref={refs[i]}
				key={i}
				value={timeValues[i]} 
				onChange={onChange} 
				onKeyDown={onKeyDown}
				className={[
					styles.Input,
					n ? styles.Filled : ''
				].join(' ')}
				autoFocus={i === 0}
				placeholder={placeholders[i]}
			/>
		)
	})

	inputs.splice(1, 0, (
		<div key='colon' className={styles.Colon}>:</div>
	))

	return (
		<div className={[styles.Container, className].join(' ')}>
			{!value && label ? <span>{label}</span> : 'Choose Time'}
			<div className={styles.InputWrapper}>
				{inputs}
				<Selectbox 
					options={[
						{
							display: 'AM',
							id: 'am'
						},
						{
							display: 'PM',
							id: 'pm'
						},
					]} 
					value={timePeriod}
					onChange={v => setTimePeriod(v)}
					styles={styles}
				/>
			</div>
		</div>
	)
}

export default TimePicker;