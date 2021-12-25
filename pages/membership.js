import styles from '../styles/Membership.module.css';

const Membership = () => {
	return (
		<>
			<header className={styles.Header}>
				<div className={styles.HeaderInner}>
					<h1 className={styles.Heading}>Membership</h1>
					<p>Register as a new member, View the list registered of members</p>
				</div>
			</header>
			<section className={styles.FormSection}>
				<div className={styles.Welcome}>
					<div className={styles.HelloText}>HELLO</div>
					<div className={styles.WelcomeText}>Welcome</div>
					<p>Register as a Member of Ondo Diocese Anglican Communion</p>
					<div className={styles.Here}>Here</div>
				</div>
				<form className={styles.Form}>
					<h2 className={styles.FormHeading}>Register As a Member</h2>
					<input className={styles.Input} placeholder='Surname' />
					<input className={styles.Input} placeholder='Other Names' />
					<input className={styles.Input} placeholder='Church' />
					<input className={styles.Input} placeholder='Archdeaconry' />
					<input className={styles.Input} placeholder='Phone Number' />
					<input className={styles.Input} placeholder='Society' />
					<input className={styles.Input} placeholder='Roles' />
					<div className={styles.Flex}>
						<div className={styles.DateInputWrapper}>
							<label className={styles.Label} htmlFor='birthday'>Birthday</label>
							<input className={styles.Input} placeholder='DD/MM/YY' id='birthday' />
						</div>
						<div className={styles.DateInputWrapper}>
							<label className={styles.Label} htmlFor='weddingAnniversary'>Wedding anniversary</label>
							<input className={styles.Input} placeholder='DD/MM/YY' id='weddingAnniversary' />
						</div>
					</div>
					<button className={styles.SubmitButton}>Submit</button>
				</form>
			</section>
		</>
	)
}

export default Membership;