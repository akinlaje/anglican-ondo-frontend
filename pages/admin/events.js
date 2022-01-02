import { useState } from 'react';
import DatePicker from '../../components/DatePicker/DatePicker';
import UploadImage from '../../components/UploadImage/UploadImage';
import TimePicker from '../../components/TimePicker/TimePicker';
import AutoGrowingTextarea from '../../components/AutoGrowingTextarea/AutoGrowingTextarea';
import styles from '../../styles/AdminEvents.module.css';
import { FaRegCalendarAlt as CalendarIcon } from 'react-icons/fa';
import axios from 'axios';
import { JSONToFormData, saveFileToNextServer } from '../../utils';
import FormError from '../../components/FormError/FormError';

const Events = ({ admin, authToken }) => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    const imgRes = await saveFileToNextServer(image);
    console.log(imgRes);

    if (imgRes?.status !== 200) {
      // error has occured while saving image to next
      setError('An Error Occured');
    }

    if (!admin.id) return;

    let eventsData = new FormData();
    eventsData.append('title', title);
    eventsData.append('details', details);
    eventsData.append('image', image);
    eventsData.append('date', date);
    eventsData.append('time', time);
    const res = await axios
      .post('http://localhost:5000/api/create/event', eventsData, {
        headers: {
          Authorization: authToken,
        },
      })
      .then((data) => {
        console.log(data);
        setTitle('');
        setTime('');
        setDetails('');
        setDate('');
        setImage('');
        alert('Created Successfully');
      });
  };

  return (
    <div className={styles.Container}>
      <div className={styles.HeadingContainer}>
        <h1 className={styles.Heading}>
          <CalendarIcon size='50px' className={styles.HeadingIcon} />
          Events
        </h1>
      </div>
      <form onSubmit={submit}>
        <div className={styles.FormInner}>
          <div className={styles.ImageContainer}>
            <DatePicker
              className={styles.DatePicker}
              date={date}
              setDate={setDate}
              label='Date'
            />
            <UploadImage file={image} setFile={setImage} />
            <TimePicker
              className={styles.TimePicker}
              time={time}
              setTime={setTime}
              label='Time'
            />
          </div>
          <div className={styles.TextContainer}>
            <input
              className={styles.Title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Event Title'
            />
            <AutoGrowingTextarea
              className={styles.AutoTextareaWrapper}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder='Event Details'
            />
          </div>
        </div>
        <button type='submit' className={styles.SubmitButton}>
          Post
        </button>
        <FormError error={error} />
      </form>
    </div>
  );
};

export default Events;
