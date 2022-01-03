import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/AdminLogin.module.css';
import FormError from '../../components/FormError/FormError';
import Spinner from '../../components/Spinner/Spinner';
import axios from 'axios';
import { FaUser as UserIcon } from 'react-icons/fa';

const Login  = ({ setAdmin, setAuthToken, admin, apiBaseUrl }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false)

	const router = useRouter();

	let returnUrl = router?.query?.returnUrl || '/admin/home'

	useEffect(() => {
		if (admin && admin.id) {
			router.push(returnUrl)
		}
	},)

	const submit = async e => {
		e.preventDefault();
		setLoading(true);
		const user = {
			username,
			password
		}

		const { data } = await axios.post(apiBaseUrl + 'user/login', user, {
			headers: {
		    'Content-Type': 'application/json',
		  },
		});
		const { token, user: admin, success, message } = data;

		if (!success) {
			setError(message);
			setLoading(false);
			return
		}

		setLoading(false);
		setLoggedIn(true)
		setAdmin(admin);
		setAuthToken(token)
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
					{loading ? <Spinner /> : 'Login'}
				</button>
			</form>
		</div>
	)
}

export default Login;