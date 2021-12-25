import { useState } from 'react';
import styles from '../../styles/AdminRadio.module.css';
import AutoGrowingTextarea from '../../components/AutoGrowingTextarea/AutoGrowingTextarea';
import TimePicker from '../../components/TimePicker/TimePicker';
import DatePicker from '../../components/DatePicker/DatePicker';

const EditEvent = (props) => {
	const [title, setTitle] = useState(props.title);
	const [anchor, setAnchor] = useState(props.anchor);
	const [time, setTime] = useState(props.time);
	const [date, setDate] = useState(props.date);

	const { setEditing } = props;

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

const Event = (props) => {
	const [editing, setEditing] = useState(false);

	if (editing) {
		return (
			<EditEvent {...props} setEditing={setEditing} />
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
	return (
		<div>
			<h1 className={styles.Heading}>Radio</h1>
			<div className={styles.Events}>
				{[...Array(3)].map((_, i) => {
					const event = {
						title: 'The Efficacy of the Holy Spirit',
						anchor: 'The Rt. Revd. S. A. Oni',
						time: '5:00pm',
						date: '21-/11/22'
					};
					return (
						<Event 
							key={i} 
							{...event} />
					)
				})}	
			</div>
		</div>
	)
}

export default Radio;