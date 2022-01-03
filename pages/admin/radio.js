import { useState, useEffect, useRef } from 'react';
import styles from '../../styles/AdminRadio.module.css';
import AutoGrowingTextarea from '../../components/AutoGrowingTextarea/AutoGrowingTextarea';
import TimePicker from '../../components/TimePicker/TimePicker';
import DatePicker from '../../components/DatePicker/DatePicker';
import cloneDeep from 'lodash/cloneDeep';

const EditRadioEvent = (props) => {
	const [title, setTitle] = useState(props.title);
	const [anchor, setAnchor] = useState(props.anchor);
	const [time, setTime] = useState(props.time);
	const [date, setDate] = useState(props.date);

	const { setEditing, saveRadioEvent } = props;

	const save = () => {
		const newRadioEvent = {
			title, anchor, time, date
		}
		saveRadioEvent(newRadioEvent);
	}

	return (
		<div className={styles.Event}>
			<div className={styles.EventDetails}>
				<img className={styles.EventImage}/>
				<div>
					<AutoGrowingTextarea 
						value={title} 
						onChange={(e) => setTitle(e.target.value)} 
						className={[styles.TextareaWrapper, styles.EventTitle].join(' ')} 
					/>
					<AutoGrowingTextarea 
						value={anchor} 
						onChange={(e) => setAnchor(e.target.value)} 
						className={styles.TextareaWrapper} 
					/>
				</div>
				<div className={styles.Time}>
					<TimePicker value={''} onChange={setTime} />
				</div>
				<div className={styles.Calendar}>
					<DatePicker value={''} onChange={setDate} />
				</div>
			</div>
			<div className={styles.ButtonContainer}>
				<button className={styles.Button} onClick={() => setEditing(false)}>Save</button>
				<button className={styles.Button}>Post</button>
			</div>
		</div>
	)
}

const RadioEvent = (props) => {
	const [editing, setEditing] = useState(false);

	if (editing) {
		return (
			<EditRadioEvent {...props} setEditing={setEditing} />
		)
	}

	return (
		<div className={styles.Event}>
			<div className={styles.EventDetails}>
				<img className={styles.EventImage}/>
				<div>
					<h3 className={styles.EventTitle}>{props.title}</h3>
					<div className={styles.EventAnchor}>{props.anchor}</div>
				</div>
				<div className={styles.Time}>
					<div>{props.time}</div>
				</div>
				<div className={styles.Calendar}>
					<div>{props.date}</div>
				</div>
			</div>
			<div className={styles.ButtonContainer}>
				<button className={styles.Button} onClick={() => setEditing(true)}>Edit</button>
				<button className={styles.Button}>Post</button>
			</div>
		</div>
	)
}

const Radio = () => {
	const [radioEvents, setRadioEvents] = useState([]);

	useEffect(() => {
		const getRadioEvents = async () => {
			radioEvents = [
				{
					title: 'The Efficacy of the Holy Spirit',
					anchor: 'The Rt. Revd. S. A. Oni',
					time: '5:00pm',
					date: '21/11/22'
				},
				{
					title: 'The Efficacy of the Holy Spirit',
					anchor: 'The Rt. Revd. S. A. Oni',
					time: '5:00pm',
					date: '21/11/22'
				}
			]
		}

		getRadioEvents()
	})

	const saveRadioEvent = async (newRadioEvent) => {
		// save radio program
		setRadioEvents(v => [...cloneDeep(v), newRadioEvent])
	} 

	return (
		<div>
			<h1 className={styles.Heading}>Radio</h1>
			<div className={styles.Events}>
				{radioEvents.map((radioEvent, i) => {
					return (
						<RadioEvent 
							key={i} 
							saveRadioEvent={saveRadioEvent}
							{...radioEvent}
						/>
					)
				})}	
			</div>
		</div>
	)
}

export default Radio;