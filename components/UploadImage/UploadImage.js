import { useRef, useState } from 'react';
import styles from './UploadImage.module.css';
import Image from '../Image/Image';
import { FaPlusCircle as PlusIcon } from 'react-icons/fa';

const UploadImage = ({ file, setFile, name, className }) => {
  const [unsupported, setUnsupported] = useState(false);

  const fileInput = useRef();

  const chooseImage = () => fileInput.current.click();

  const FILE_TYPES = ['png', 'jpg', 'jpeg'];

  const onChange = (e) => {
    setUnsupported(false);
    const selectedFile = e.target.files[0];
    if (!setUnsupported) return;
    const { name } = selectedFile;
    const ext = name.slice(((name.lastIndexOf('.') - 1) >>> 0) + 2);
    let supported = false;
    for (let i = FILE_TYPES.length - 1; i >= 0; i--) {
      if (FILE_TYPES[i] === ext.toLowerCase()) {
        supported = true;
        break;
      }
    }
    setUnsupported(!supported);
    setFile(selectedFile);
  };

  return (
    <div
      className={[styles.Container, className].join(' ')}
      onClick={chooseImage}
    >
      <input
        ref={fileInput}
        className={styles.Input}
        type='file'
        onChange={onChange}
        accept={FILE_TYPES.map((type) => '.' + type).join(', ')}
        name={name}
      />
      {file ? (
        <div className={styles.Image}>
          <Image
            file={file}
            alt={file.filename}
            layout='contain'
            objectFit='contain'
            height='200px'
            width='200px'
          />
        </div>
      ) : unsupported ? (
        <div>Unsupported file type please upload a png, jpg or jpeg file</div>
      ) : (
        <PlusIcon className={styles.PlusIcon} size='50px' color='var(--pri)' />
      )}
      <button className={styles.AddImageButton}>
        {file ? 'Change ' : 'Add '}Image
      </button>
    </div>
  );
};

export default UploadImage;
