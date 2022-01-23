import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import DatePicker from '../components/DatePicker/DatePicker';
import TimePicker from '../components/TimePicker/TimePicker';
import AutoGrowingTextarea from '../components/AutoGrowingTextarea/AutoGrowingTextarea';
import styles from '../styles/BookEvent.module.css';

const BookEvent = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [numChairs, setNumChairs] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const submit = (e) => {
    e.preventDefault();
    let data = {
      name,
      date,
      startTime,
      endTime,
      numChairs,
      phoneNumber,
      message,
      email,
    };

    fetch('/api/event', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        console.log('Response received');
        if (res.status === 200) {
          alert('Sent successfully!');
          setName('');
          setDate('');
          setStartTime('');
          setEndTime('');
          setNumChairs('');
          setPhoneNumber('');
          setMessage('');
        }
      })
      .catch((e) => {
        console.log(e);
        alert('Email is not sent please try again or contact the church');
      });
  };

  return (
    <div>
      <Head>
        <title>About | Anglican Diocese of Ondo</title>
        <meta name='description' content='About the Anglican diocese of Ondo' />
        <link rel='icon' href='/images/diocese-logo.png' />
      </Head>
      <header className={styles.Header}>
        <Head>
          <title>About | Anglican Diocese of Ondo</title>
          <meta
            name='description'
            content='About the Anglican diocese of Ondo'
          />
          <link rel='icon' href='/images/diocese-logo.png' />
        </Head>
        <div className={styles.HeaderImage}>
          <Image
            src='/images/event-hall.jpg'
            layout='fill'
            objectFit='cover'
            alt='event hall'
          />
        </div>
        <div className={styles.HeaderInner}>
          <h1 className={styles.Heading}>Book Our Event Center</h1>
          <p className={styles.HeadingText}>
            OFM Hall, Ondo Diocese 3R7V+F5Q, 351106, Ondo
            <span style={{ fontWeight: '500', display: 'block' }}>
              0813 169 5156
            </span>
            <Link href='https://g.co/kgs/RQUwNZ'>
              <a className={styles.SeeOnGoogle}>View on Google</a>
            </Link>
            OFM Hall, Diocese of Ondo now on google Map. You can check/view the
            Hall gallery and get direction from any where in the world. A trial
            will definitely convince you pls!
          </p>
        </div>
      </header>
      <section>
        <form className={styles.Form} onSubmit={submit}>
          {/* date, startTime, endTime, no of chairs, phone number */}
          <label className={styles.Label}>Name</label>
          <input
            className={styles.Input}
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label className={styles.Label}>Email</label>
          <input
            className={styles.Input}
            value={email}
            type='email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={styles.Label}>Phone Number</label>
          <input
            type='number'
            className={styles.Input}
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <DatePicker
            className={styles.DatePicker}
            date={date}
            setDate={setDate}
            label={
              <span style={{ color: '#000', fontWeight: '500' }}>Date</span>
            }
          />
          <label className={styles.Label}>Time</label>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <TimePicker
              className={styles.TimePicker}
              time={startTime}
              setTime={setStartTime}
              label={
                <span style={{ color: '#000', fontWeight: '500' }}>From</span>
              }
            />
            <TimePicker
              className={styles.TimePicker}
              time={endTime}
              setTime={setEndTime}
              label={
                <span style={{ color: '#000', fontWeight: '500' }}>To</span>
              }
            />
          </div>
          <label className={styles.Label}>Number of Chairs</label>
          <input
            type='number'
            className={styles.Input}
            value={numChairs}
            required
            onChange={(e) => setNumChairs(e.target.value)}
          />
          <label className={styles.Label}>Event details</label>
          <AutoGrowingTextarea
            className={styles.AutoTextareaWrapper}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='What is the event about'
          />
          <button type='submit' className={styles.SubmitButton}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default BookEvent;
