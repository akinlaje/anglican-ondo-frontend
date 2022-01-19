import { useRef, useState } from 'react';
import styles from './UploadImage.module.css';
import Image from 'next/image';
import { FaPlusCircle as PlusIcon } from 'react-icons/fa';

const UploadImage = ({
  file,
  editing,
  setFile,
  name,
  className,
  initialImageUrl,
}) => {
  const [unsupported, setUnsupported] = useState(false);

  const fileInput = useRef();

  const chooseImage = () => fileInput.current.click();

  const FILE_TYPES = ['png', 'jpg', 'jpeg'];

  const onChange = (e) => {
    e.preventDefault();
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

  let src;
  // if (file) {
  //   if (typeof file === 'string') {
  //     src = file;
  //   } else {
  //     src = URL.createObjectURL(file);
  //   }
  // }

  if (editing) {
    src = initialImageUrl;
    // console.log(src);
  } else {
    if (file) {
      console.log(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

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
            src={src}
            alt={file.filename}
            layout='fill'
            objectFit='contain'
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
