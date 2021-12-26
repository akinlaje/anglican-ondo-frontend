import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/AdminLogin.module.css';
import axios from 'axios';

const Login  = ({ setAdmin, setAuthToken }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const router = useRouter();

	const submit = async e => {
		e.preventDefault();
		console.log('logging in');
		const user = {
			username,
			password
		}
		const { data } = await axios.post('http://localhost:5000/api/user/login', user, {
			headers: {
		    'Content-Type': 'application/json',
		  },
		});
		const { token, user: admin } = data;
		console.log(admin, token);

		setAdmin(admin);
		setAuthToken(token)
		router.push('/admin/home');
	}

	// email: raheemolalekanusman94@gmail.com
	// username: creator
	// password: creato?!r1

	return (
		<div className={styles.Container}>
			<form className={styles.Form} onSubmit={submit}>
				<label className={styles.Label}>
					Username
				</label>
				<input 
					className={styles.Input}
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
				<label className={styles.Label}>
					Password
				</label>
				<input 
					className={styles.Input}
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button className={styles.SubmitButton}>
					Login
				</button>
			</form>
		</div>
	)
}

export default Login;