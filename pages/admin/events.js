import { useState } from 'react';
import DatePicker from '../../components/DatePicker/DatePicker';
import UploadImage from '../../components/UploadImage/UploadImage';
import TimePicker from '../../components/TimePicker/TimePicker';
import AutoGrowingTextarea from '../../components/AutoGrowingTextarea/AutoGrowingTextarea';
import Spinner from '../../components/Spinner/Spinner';
import styles from '../../styles/AdminEvents.module.css';
import { FaRegCalendarAlt as CalendarIcon } from 'react-icons/fa';
import axios from 'axios';
import FormError from '../../components/FormError/FormError';
import { v4 as uuidv4 } from 'uuid';
import { formatDate } from '../../utils'

const Events = ({ admin, authToken, apiBaseUrl }) => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSaving(true);
    let eventsData = new FormData();

    let id = `${title}${uuidv4()}`;

    eventsData.append('id', id);
    eventsData.append('title', title);
    eventsData.append('details', details);
    eventsData.append('image', image);
    eventsData.append('date', formatDate(date));
    eventsData.append('time', time);

    axios
      .post(apiBaseUrl + 'create/event', eventsData, {
        headers: {
          Authorization: authToken,
        },
      })
      .then((data) => {
        setTitle('');
        setTime('');
        setDetails('');
        setDate('');
        setImage('');
        setSaving(false);
        alert('Created Successfully');
      })
      .catch((err) => {
        setSaving(false);
        alert('An Error occured');
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
        <button type='submit' className={styles.SubmitButton} disabled={saving}>
          {saving ? <Spinner /> : 'Post'}
        </button>
        <FormError error={error} />
      </form>
    </div>
  );
};

export default Events;
