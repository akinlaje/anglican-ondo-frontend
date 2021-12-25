import { useState } from 'react';
import styles from '../../styles/AdminPriests.module.css';
import AutoGrowingTextarea from '../../../components/AutoGrowingTextarea/AutoGrowingTextarea';
import { FaPlusCircle as PlusIcon } from 'react-icons/fa';

const Priest = () => {
	return (
		<div className={styles.Priest}>
			<img className={styles.Image} />
			<h3 className={styles.Name}>Ven S.O. Adeleye</h3>
			<p>Ondo Archdeaconry</p>
			<button 
				className={[
					styles.Button, 
					styles.RemoveButton
				].join(' ')}
			>Remove</button>
		</div>
	)
}

const AddPriest = ({ name, setName, title, setTitle }) => {
	return (
		<div className={[styles.Priest, styles.NewPriest].join(' ')}>
			<PlusIcon className={styles.Image} color='var(--pri)' />
			<AutoGrowingTextarea 
				value={name}
				onChange={e => setName(e.target.value)}
				className={[styles.Name, styles.TextareaWrapper].join(' ')} 
				placeholder='Name' 
			/>
			<AutoGrowingTextarea 
				value={title}
				onChange={e => setTitle(e.target.value)}
				className={styles.TextareaWrapper} 
				placeholder='Title' 
			/>
			{name.trim() && title.trim() && <button className={styles.Button}>Add</button>}
		</div>
	)
}

const Priests = () => {
	const [name, setName] = useState('');
	const [title, setTitle] = useState('');

	return (
		<div>
			<div className={styles.HeadingContainer}>
				<h1 className={styles.Heading}>Churches</h1>
			</div>
			<div className={styles.Priests}>
				{[...Array(5)].map((priest, i) => {
					return (
						<Priest key={i} />
					)
				})}
				<AddPriest 
					name={name}
					setName={setName}
					title={title}
					setTitle={setTitle} 
				/>
			</div>
		</div>
	)
}

export default Priests;