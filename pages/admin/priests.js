import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../styles/AdminPriests.module.css';
import AutoGrowingTextarea from '../../components/AutoGrowingTextarea/AutoGrowingTextarea';
import { FaPlusCircle as PlusIcon } from 'react-icons/fa';
import cloneDeep from 'lodash/cloneDeep'
import { saveFileToNextServer, deleteFileFromNextServer } from '../../utils';
import FormError from '../../components/FormError/FormError';

const Priest = ({ name, position, image, id, deletePriest }) => {
	return (
		<div className={styles.Priest}>
			<div className={styles.Image}>
				<Image layout='fill' objectFit='contain' alt={name} src={'/uploads/' + image} />
			</div>
			<h3 className={styles.Name}>{ name }</h3>
			<p>{ position }</p>
			<button 
				onClick={() => deletePriest(id)}
				className={[
					styles.Button, 
					styles.RemoveButton
				].join(' ')}
			>Remove</button>
		</div>
	)
}

const AddPriest = ({ name, setName, position, setPosition, image, setImage, savePriest, error }) => {
	const [imageObjectUrl, setImageObjectUrl] = useState(
		image ? URL.createObjectURL(image) : '/images/svgs/image.svg'
	)

	useEffect(() => {
		if (!image) return
		setImageObjectUrl(URL.createObjectURL(image))
	}, [image])

	const inputRef = useRef();

	const onChange = e => {
		setImage(e.target.files[0])
	}

	const chooseImage = () => {
		inputRef.current.click();
	}

	return (
		<div className={[styles.Priest, styles.NewPriest].join(' ')}>
			<input style={{display: 'none'}} type='file' accept='.jpg, png, jpeg' onChange={onChange} />
			{image ? (
				<div className={styles.Image}>
					<Image onClick={chooseImage} layout='fill' objectFit='contain' src={imageObjectUrl} alt={name} />
				</div>
			) : <PlusIcon  onClick={chooseImage} className={styles.Image} color='var(--pri)' />}
			<AutoGrowingTextarea 
				value={name}
				onChange={e => setName(e.target.value)}
				className={[styles.Name, styles.TextareaWrapper].join(' ')} 
				placeholder='Name' 
			/>
			<AutoGrowingTextarea 
				value={position}
				onChange={e => setPosition(e.target.value)}
				className={styles.TextareaWrapper} 
				placeholder='position' 
			/>
			<input 
				ref={inputRef} 
				style={{display: 'none'}} 
				type='file' accept='.jpg, png, jpeg' 
				onChange={onChange} 
			/>
			{name.trim() && position.trim() && image && (
				<button 
					onClick={savePriest} 
					className={[styles.Button, styles.AddButton].join(' ')}
				>Add</button>
			)}
			<FormError error={error} />
		</div>
	)
}

const Priests = () => {
	const [priests, setPriests] = useState([]);

	const [name, setName] = useState('');
	const [position, setPosition] = useState('');
	const [image, setImage] = useState();
	const [error, setError] = useState('')

	useEffect(() => {
		const getPriests = async () => {
			// get priests from  backend
			const priests = [
				{
					id: '1',
					name: 'Ven S. O. Adeleye',
					position: 'Ondo Archdeaconry',
					image: 'SA.png'
				},
				{
					id: '2',
					name: 'Ven S. O. Adeleye',
					position: 'Ondo Archdeaconry',
					image: 'SA.png'
				},
				{
					id: '3',
					name: 'Ven S. O. Adeleye',
					position: 'Ondo Archdeaconry',
					image: 'SA.png'
				},
			]
			setPriests(priests)
		}

		getPriests();
	}, [])

	const savePriest = async () => {

		const imgRes = await saveFileToNextServer(image);
		console.log(imgRes)

		if (imgRes?.status !== 200) {
			// error has occured while saving image to next
			setError('An Error Occured');
		}

		const newPriest = { name, position, image };
		console.log(newPriest)
		// save priest to backend

		setPriests(v => [...cloneDeep(v), newPriest]);
		setImage(null)
		setName('')
		setPosition('')
	}

	const deletePriest = async (id) => {
		// delete priest from nextjs server
		let imageName
		for (let i = priests.length - 1; i >= 0; i--) {
			if (priests[i].id === id) {
				imageName = priests[i].image
				break
			}
		}

		console.log(imageName)
		const imgRes = await deleteFileFromNextServer(imageName);
		console.log(imgRes)

		if (imgRes?.status !== 200) {
			// error has occured while saving image to next
			setError('An Error Occured');
		}

		// delete priest image from server

		setPriests(
			priests => priests.map(priest => priest.id === id ? null : {...priest}).filter(v => v)
		)
	}

	return (
		<div>
			<div className={styles.HeadingContainer}>
				<h1 className={styles.Heading}>Priests</h1>
			</div>
			<div className={styles.Priests}>
				{priests.map((priest, i) => {
					return (
						<Priest key={i} {...priest} deletePriest={deletePriest}/>
					)
				})}
				<AddPriest 
					name={name}
					setName={setName}
					position={position}
					setPosition={setPosition}
					image={image}
					setImage={setImage} 
					savePriest={savePriest}
					error={error}
				/>
			</div>
		</div>
	)
}

export default Priests;