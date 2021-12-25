import { useState, useRef } from 'react';
import styles from './DatePicker.module.css';
import Calendar from '../Calendar/Calendar';
import HandleClickOutside from '../../hoc/HandleClickOutside';
import { DateTime } from 'luxon';
import { isValidDate } from '../../utils';

const DatePicker = ({ date, setDate, className, label }) => {
	const [open, setOpen] = useState(false);
	const [inputDateValid, setInputDateValid] = useState(isValidDate(date));
	const [value, setValue] = useState(inputDateValid ? date : '');

	const ref = useRef();

	const FORMAT = 'dd/MM/yyyy';
	const LOCALE = 'en-GB';

	const closeCalendar = () => setOpen(false);
	const openCalendar = () => setOpen(true);

	const parseDate = (str, format, locale) => {
	  const dt = DateTime.fromFormat(str, format, locale);
	  const parsed = dt.toJSDate();
	  if (isValidDate(parsed)) {
	    return parsed;
	  }
	  return undefined;
	}

	const formatDate = (date, format, locale) => {
	  return DateTime.fromJSDate(date).setLocale(locale).toFormat(format);
	}

	const pad = (dateString) => {
		let [day='', month='', year=''] = dateString.split('/');
		if (day.length === 1) day = day.padStart(2, '0');
		if (month.length === 1) month = month = month.padStart(2, '0');
		if (year.length === 2) year = year.padStart(4, '20');
		return [day, month, year].join('/');
	}

	const onChange = e => {
		let newDate = e.target.value;
		setValue(newDate);
		// pad day, month and year parts of the string before parsing
		newDate = pad(newDate);
		const parsed = parseDate(newDate, FORMAT, LOCALE);
		// console.log(parsed);
		if (parsed) {
			setInputDateValid(true);
			setDate(parsed);
		}
	}

	const onBlur = () => {
		if (inputDateValid) setValue(formatDate(date, FORMAT, LOCALE));
	}

	const setCalendarDate = (date) => {
		const formatted = formatDate(date, FORMAT, LOCALE);
		setValue(formatted);
		setDate(date)
	}

	return (
		<div ref={ref} className={[styles.Container, className].join(' ')} onClick={openCalendar}>
			{label && <label htmlFor='date'>{label}</label>}
			<input 
				className={styles.Input}
				placeholder={FORMAT.toUpperCase()} 
				value={value}
				onChange={onChange} 
				onBlur={onBlur}
				name='date'
			/>
			{open && (
				<HandleClickOutside
					container={ref}
					onOutsideClick={closeCalendar}
				>
					<Calendar className={styles.Calendar} date={date} setDate={setCalendarDate} />
				</HandleClickOutside>
			)}
		</div>
	)
}

export default DatePicker;