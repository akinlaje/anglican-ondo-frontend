import { useState, useEffect } from 'react';
import styles from './Calendar.module.css';
import {
	GrFormPrevious as PrevIcon,
	GrFormNext as NextIcon
} from 'react-icons/gr';
import { isValidDate } from '../../utils';

const Calendar = ({ date=new Date(), setDate, initialDate, className }) => {
	const [currentDate, setCurrentDate] = useState(date);
	// const currentDayOfWeek = currentDate.getDay();
	// const currentDayOfMonth = currentDate.getDate();
	const currentMonth = currentDate.getMonth();
	const currentYear = currentDate.getFullYear();

	useEffect(() => {
		setCurrentDate(date);
	}, [date])

	const isLeapYear = year => !(year & 3 || (!(year % 25) && year & 15));

	const WEEK_DAYS = [
		'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
	]

	const MONTHS = [
		'January', 'Febuary', 'March', 'April', 'May', 'June', 
		'July', 'August', 'September', 'October', 'November', 'December'
	].map((name, i) => {
		let numDays = 31;
		if ([3, 5, 8, 10].includes(i)) numDays = 30;
		if (i === 1) numDays = isLeapYear(currentYear) ? 29 : 28
		return {
			name,
			numDays
		}
	})

	const getMonthDaysNum = (monthIndex) => MONTHS[monthIndex].numDays;

	const getPrevMonth = (monthIndex) => monthIndex === 0 ? 11 : monthIndex - 1;

	const getNextMonth = (monthIndex) => monthIndex === 11 ? 0 : monthIndex + 1;

	const next = () => {
		let year = currentYear;
		if (currentMonth === 11) year++;
		const nextMonth = getNextMonth(currentMonth);
		setCurrentDate(new Date(year, nextMonth));
	}

	const prev = () => {
		let year = currentYear;
		if (currentMonth === 0) year--;
		const prevMonth = getPrevMonth(currentMonth);
		setCurrentDate(new Date(year, prevMonth));
	}

	const firstWeekDayOfMonth = new Date(currentYear, currentMonth, 0).getDay();

	const days = [...Array(35)].map((_, i) => {
		let calendarDate, isInCurrentMonth, isInPrevMonth, isInNextMonth, selected;
		if (firstWeekDayOfMonth < i) {
			const currentMonthNumDays = getMonthDaysNum(currentMonth);
			if (i > currentMonthNumDays + firstWeekDayOfMonth) {
				calendarDate = i - (currentMonthNumDays + firstWeekDayOfMonth);
				isInNextMonth = true;
			} else {
				calendarDate = i - firstWeekDayOfMonth;
				isInCurrentMonth = true;
			}
		} else {
			const prevMonthIndex = getPrevMonth(currentMonth);
			calendarDate = getMonthDaysNum(prevMonthIndex) - firstWeekDayOfMonth + i;
			isInPrevMonth = true;
		}

		if (date && isValidDate(date) && (date.getDate() === calendarDate)) {
			selected = date.getMonth() === currentMonth ? isInCurrentMonth :  // is same month
				date.getMonth() === getPrevMonth(currentMonth) ? isInPrevMonth : // previous month
				date.getMonth() === getNextMonth(currentMonth) ? isInNextMonth : false // next month
		}

		return {
			calendarDate,
			isInCurrentMonth,
			isInNextMonth,
			isInPrevMonth,
			selected
		}
	});

	const currentMonthName = MONTHS[currentMonth].name;
	
	return (
		<div className={[styles.Container, className].join(' ')}>
			<div className={styles.Nav}>
				<PrevIcon size='1.5em' className={styles.Icon} onClick={prev} />
				<div>{currentMonthName}</div>
				<div>{currentYear}</div>
				<NextIcon size='1.5em' className={styles.Icon} onClick={next} />
			</div>
			<div className={styles.Days}>
				{WEEK_DAYS.map(day => (
					<div key={day} className={styles.WeekDay}>
						{day.substring(0, 2)}
					</div>
				))}
				{days.map((day, i) => {
					const { isInCurrentMonth, calendarDate, isInPrevMonth, isInNextMonth, selected } = day;
					const onClick = () => {
						const month = isInCurrentMonth ? currentMonth : 
							isInPrevMonth ? getPrevMonth(currentMonth) : getNextMonth(currentMonth);
						const year = (
							(currentMonth === 11 && isInNextMonth) ? currentYear + 1 :
							(currentMonth === 0 && isInPrevMonth) ? currentYear - 1 :
							currentYear
						)
						const dt = new Date(year, month, calendarDate);
						// console.log(dt.getMonth);
						setDate(dt);
					}
					return (
						<div 
							key={i} 
							className={[
								styles.Day,
								!isInCurrentMonth ? styles.NotInCurrentMonth : '',
								selected ? styles.Selected : ''
							].join(' ')}
							onClick={onClick}
						>
							{calendarDate}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Calendar;