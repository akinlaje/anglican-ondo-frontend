import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Membership.module.css';

const Membership = () => {
	const [surname, setSurname] = useState('')
	const [otherNames, setOtherNames] = useState('')
	const [church, setChurch] = useState('')
	const [archdeaconry, setArchdeaconry] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [society, setSociety] = useState('')
	const [roles, setRoles] = useState('')
	const [confirmationDate, setConfirmationDate] = useState('')
	const [baptismDate, setBaptismDate] = useState('')
	const [birthday, setBirthday] = useState('')
	const [weddingAnniversary, setWeddingAnniversary] = useState('')

	const submit = async e => {
		e.preventDefault()
		const member = {
			surname,
			otherNames,
			church,
			archdeaconry,
			phoneNumber,
			society,
			roles,
			baptismDate,
			confirmationDate,
			birthday,
			weddingAnniversary
		}
		// console.log(member)
		//send to serer
	}

	return (
		<>
			<header className={styles.Header}>
        <Head>
          <title>Membership | Anglican Diocese of Ondo</title>
          <meta name="description" content="Membership of the Anglican diocese of Ondo" />
          <link rel="icon" href="/images/diocese-logo.png" />
        </Head>
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
				<form className={styles.Form} onSubmit={submit}>
					<h2 className={styles.FormHeading}>Register As a Member</h2>
					<input 
						className={styles.Input} 
						placeholder='Surname' 
						value={surname}
						onChange={e => setSurname(e.target.value)}
					/>
					<input 
						className={styles.Input} 
						placeholder='Other Names'
						value={otherNames} 
						onChange={e => setOtherNames(e.target.value)}
					/>
					<input 
						className={styles.Input} 
						placeholder='Church' 
						value={church} 
						onChange={e => setChurch(e.target.value)}
					/>
					<input 
						className={styles.Input} 
						placeholder='Archdeaconry' 
					/>
					<input 
						type='number'
						className={styles.Input} 
						placeholder='Phone Number' 
						value={phoneNumber} 
						onChange={e => setPhoneNumber(e.target.value)}
					/>
					<input 
						className={styles.Input} 
						placeholder='Society' 
						value={society} 
						onChange={e => setSociety(e.target.value)}
					/>
					<input 
						className={styles.Input} 
						placeholder='Date of baptism' 
						value={baptismDate} 
						onChange={e => setBaptismDate(e.target.value)}
					/>
					<input 
						className={styles.Input} 
						placeholder='Date of confirmation' 
						value={confirmationDate} 
						onChange={e => setConfirmationDate(e.target.value)}
					/>
					<div className={styles.Flex}>
						<div className={styles.DateInputWrapper}>
							<label 
								className={styles.Label} 
								htmlFor='birthday'
							>
								Birthday
							</label>
							<input 
								className={styles.Input} 
								placeholder='DD/MM/YY' 
								id='birthday' 
								value={birthday} 
								onChange={e => setBirthday(e.target.value)}
							/>
						</div>
						<div className={styles.DateInputWrapper}>
							<label 
								className={styles.Label} 
								htmlFor='weddingAnniversary'
							>
								Wedding anniversary
							</label>
							<input 
								className={styles.Input} 
								placeholder='DD/MM/YY' 
								id='weddingAnniversary' 
								value={weddingAnniversary} 
								onChange={e => setWeddingAnniversary(e.target.value)}
							/>
						</div>
					</div>
					<button type='submit' className={styles.SubmitButton}>Submit</button>
				</form>
			</section>
		</>
	)
}

export default Membership;