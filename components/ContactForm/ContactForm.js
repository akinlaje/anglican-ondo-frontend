import { useState } from 'react';
import styles from './ContactForm.module.css';
import AutoGrowingTextarea from '../AutoGrowingTextarea/AutoGrowingTextarea';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Sending');
    let data = {
      name,
      email,
      message,
      subject,
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log('Response received');
        if (res.status === 200) {
          alert('Email succeeded!');
          setSubmitted(true);
          setName('');
          setEmail('');
          setMessage('');
          setSubject('');
        }
      })
      .catch((e) => {
        console.log(e);
        alert('Email is not sent please try again or contact the church');
      });
  };

  return (
    <section
      className={[styles.Section, styles.ContactSection].join(' ')}
      id='contact-us'
    >
      <h2 className={styles.SectionHeading}>CONTACT US</h2>
      <form className={styles.ContactForm}>
        <div className={styles.ContactFormInner}>
          <div className={styles.ContactInputsWrapper}>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className={styles.ContactInput}
              placeholder='YOUR NAME'
            />
            <input
              type='text'
              name='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={styles.ContactInput}
              placeholder='YOUR EMAIL'
            />
            <input
              type='text'
              name='name'
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              className={styles.ContactInput}
              placeholder='SUBJECT'
            />
          </div>
          <AutoGrowingTextarea
            className={styles.ContactTextareaWrapper}
            textareaClassName={styles.ContactTextarea}
            id='message'
            name='message'
            placeholder='MESSAGE'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <button
          type='submit'
          onClick={(e) => {
            handleSubmit(e);
          }}
          className={styles.ContactButton}
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
