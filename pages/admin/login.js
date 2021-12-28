import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/AdminLogin.module.css';
import FormError from '../../components/FormError/FormError';
import Spinner from '../../components/Spinner/Spinner';
import axios from 'axios';
import { FaUser as UserIcon } from 'react-icons/fa';

const Login  = ({ setAdmin, setAuthToken }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		console.log(loading)
	}, [loading])

	const router = useRouter();

	const submit = async e => {
		e.preventDefault();
		setLoading(true);
		const user = {
			username,
			password
		}
		console.log('logging in user: ', user);

		const { data } = await axios.post('http://localhost:5000/api/user/login', user, {
			headers: {
		    'Content-Type': 'application/json',
		  },
		});
		const { token, user: admin, err } = data;
		// console.log(admin, token);

		if (err) return setError(err);

		setLoading(false);
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
				<h1 className={styles.Heading}>
					<UserIcon size='50px' className={styles.HeadingIcon} />
					Admin Login
				</h1>
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
				{error && <FormError error={error} />}
				<button className={styles.SubmitButton} disabled={loading}>
					{loading ? <Spinner size='1.2em' /> : 'Login'}
				</button>
			</form>
		</div>
	)
}

export default Login;