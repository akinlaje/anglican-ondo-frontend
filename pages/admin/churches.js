import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/AdminChurches.module.css';
import AutoGrowingTextarea from '../../components/AutoGrowingTextarea/AutoGrowingTextarea';
import FormError from '../../components/FormError/FormError';
import { FaPlusCircle as PlusIcon } from 'react-icons/fa';
import cloneDeep from 'lodash/cloneDeep'

const AddChurch = ({ name, setName, location, setLocation, saveChurch }) => {
	return (
		<div className={[styles.Church, styles.NewChurch].join(' ')}>
			<AutoGrowingTextarea 
				value={name}
				onChange={e => setName(e.target.value)}
				placeholder='Church Name' 
				className={[styles.TextareaWrapper, styles.Name].join(' ')} 
			/>
			<AutoGrowingTextarea 
				value={location}
				onChange={e => setLocation(e.target.value)}
				placeholder='Location' 
				className={styles.TextareaWrapper} 
			/>
			{image ? (
				<Image height='500px' width='500px' src={URL.createObjectURL(image)} alt={name} />
			) : <PlusIcon className={styles.Image} color='var(--pri)' />}
			<button className={styles.SaveButton} onClick={saveChurch}>Save</button>
		</div>
	)
}

const Churches = () => {
	// state for saved chrches
	const [churches, setChurches] = useState([]);

	// state for the new church
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');

	const [saving, setSaving] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const getChurches = async () => {
			// get the saved churches
			const churches = [
				{
					name: 'ST. Stephen Cathedral',
					location: 'No 32 Oke Aluko Street, Ondo',
					image: '/images/ae.jpg'
				},
				{
					name: 'ST. Stephen Cathedral',
					location: 'No 32 Oke Aluko Street, Ondo',
					image: '/images/ae.jpg'
				},
				{
					name: 'ST. Stephen Cathedral',
					location: 'No 32 Oke Aluko Street, Ondo',
					image: '/images/ae.jpg'
				},
			]
			setChurches(churches)
		}
		getChurches();
	}, [])

	const saveChurch = async () => {
		const newChurch = {
			name,
			location
		}

		if (!name) return setError(' Please input a name')
		if (!location) return setError(' Please input a location')

		// save church

		setChurches(v => [...cloneDeep(v), newChurch]);
	}

	return (
		<div>
			<div className={styles.HeadingContainer}>
				<h1 className={styles.Heading}>Churches</h1>
			</div>
			<div className={styles.Churches}>
				{churches.map(({ name, location, image }, i) => {
					return (
						<div key={i} className={styles.Church}>
							<div className={styles.Info}>
								<h3 className={styles.Name}>{ name }</h3>
								<div className={styles.Location}>{location}</div>
							</div>
							<Image height='500px' width='500px' className={styles.Image} src={image} alt={name}/>
						</div>
					)
				})}
				<AddChurch 
					name={name}
					setName={setName}
					location={location}
					setLocation={setLocation}
					saveChurch={saveChurch} 
				/>
				{error && <FormError error={error} />}
			</div>
		</div>
	)
}

export default Churches;