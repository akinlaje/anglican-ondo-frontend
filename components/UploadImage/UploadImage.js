import { useRef, useState } from 'react';
import styles from './UploadImage.module.css';
import Image from '../Image/Image';
import { FaPlusCircle as PlusIcon } from 'react-icons/fa';

const UploadImage = ({ file, setFile, name, className }) => {
	const [unsupported, setUnsupported] = useState(false);

	const fileInput = useRef();

	const chooseImage = () => fileInput.current.click();

	const FILE_TYPES = ['png', 'jpg', 'jpeg'];

	const onChange = e => {
		const selectedFile = e.target.files[0];
		if (!setUnsupported) return;
		const { name } = selectedFile;
		const ext = name.slice((name.lastIndexOf(".") - 1 >>> 0) + 2);
		if (!FILE_TYPES.includes(ext)) {
			setUnsupported(true);
			return;
		}
		setFile(selectedFile);
	}

	return (
		<div 
			className={[
				styles.Container,
				className
			].join(' ')} 
			onClick={chooseImage}>
			<input 
				ref={fileInput} 
				className={styles.Input} 
				type='file' 
				onChange={onChange} 
				accept={FILE_TYPES.map(type => '.' + type).join(', ')}
				name={name}
			/>
			{file ? <Image file={file} alt={file.filename} className={styles.Image} /> : 
				unsupported ? (
					<div>Unsupported file type please upload a png, jpg or jpeg file</div>
				) : (
				<PlusIcon className={styles.PlusIcon} size='50px' color='var(--pri)' />
			)}
			<div className={styles.AddImage}>{ file ? 'Change ' : 'Add ' }Image</div>
		</div>
	)
}

export default UploadImage;