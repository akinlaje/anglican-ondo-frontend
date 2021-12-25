import { useState } from 'react';
import styles from '../../styles/AdminChurches.module.css';
import AutoGrowingTextarea from '../../../components/AutoGrowingTextarea/AutoGrowingTextarea';
import { FaPlusCircle as PlusIcon } from 'react-icons/fa';

const AddChurch = ({ name, setName, location, setLocation }) => {
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
			<PlusIcon size='200px' color='var(--pri)' 
				className={styles.PlusIcon}
			/>
		</div>
	)
}

const Churches = () => {
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');

	return (
		<div>
			<div className={styles.HeadingContainer}>
				<h1 className={styles.Heading}>Churches</h1>
			</div>
			<div className={styles.Churches}>
				{[...Array(3)].map((church, i) => {
					return (
						<div key={i} className={styles.Church}>
							<div className={styles.Info}>
								<h3 className={styles.Name}>ST. Stephen Cathedral</h3>
								<div className={styles.Location}>No 32 Oke Aluko Street, Ondo</div>
							</div>
							<img className={styles.Image} />
						</div>
					)
				})}
				<AddChurch 
					name={name}
					setName={setName}
					location={location}
					setLocation={setLocation} 
				/>
			</div>
		</div>
	)
}

export default Churches;