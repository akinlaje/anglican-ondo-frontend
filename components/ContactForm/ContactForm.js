import styles from './ContactForm.module.css';
import AutoGrowingTextarea from '../AutoGrowingTextarea/AutoGrowingTextarea';

const ContactForm = () => {
	return (
  	<section className={[styles.Section, styles.ContactSection].join(' ')} id='contact-us'>   
  	  <h2 className={styles.SectionHeading}>CONTACT US</h2>
  	  <form className={styles.ContactForm}>
  	    <div className={styles.ContactFormInner}>
  	      <div className={styles.ContactInputsWrapper}>
  	        <input className={styles.ContactInput}  placeholder="YOUR NAME" />
  	        <input className={styles.ContactInput} placeholder="YOUR EMAIL" />
  	        <input className={styles.ContactInput} placeholder="SUBJECT" />
  	      </div>
  	      <AutoGrowingTextarea 
  	      	className={styles.ContactTextareaWrapper} 
  	      	textareaClassName={styles.ContactTextarea}
  	      	id='contact-text' 
  	      	name='contact-text' 
  	      	placeholder='MESSAGE'
  	      />
  	    </div>
  	    <button className={styles.ContactButton}>SEND MESSAGE</button>
  	  </form>
  	</section>
	)
}

export default ContactForm;