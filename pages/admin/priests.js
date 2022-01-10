import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../styles/AdminPriests.module.css';
import AutoGrowingTextarea from '../../components/AutoGrowingTextarea/AutoGrowingTextarea';
import { FaPlusCircle as PlusIcon } from 'react-icons/fa';
import cloneDeep from 'lodash/cloneDeep';
import Spinner from '../../components/Spinner/Spinner';
import FormError from '../../components/FormError/FormError';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const Priest = ({
  name,
  position,
  image,
  id,
  deletePriest,
  imageUrl,
  deleting,
}) => {
  return (
    <div className={styles.Priest}>
      <div className={styles.Image}>
        <Image layout='fill' objectFit='contain' alt={name} src={imageUrl} />
      </div>
      <h3 className={styles.Name}>{name}</h3>
      <p>{position}</p>
      <button
        onClick={() => deletePriest(id, image)}
        className={[styles.Button, styles.RemoveButton].join(' ')}
      >
        {deleting === id ? <Spinner color='#000' /> : 'Remove'}
      </button>
    </div>
  );
};

const AddPriest = ({
  name,
  setName,
  position,
  setPosition,
  image,
  setImage,
  savePriest,
  error,
  saving,
}) => {
  const [imageObjectUrl, setImageObjectUrl] = useState(
    image ? URL.createObjectURL(image) : '/images/svgs/image.svg'
  );

  useEffect(() => {
    if (!image) return;
    setImageObjectUrl(URL.createObjectURL(image));
  }, [image]);

  const inputRef = useRef();

  const onChange = (e) => {
    setImage(e.target.files[0]);
  };

  const chooseImage = () => {
    inputRef.current.click();
  };

  return (
    <div className={[styles.Priest, styles.NewPriest].join(' ')}>
      {image ? (
        <div className={styles.Image}>
          <Image
            onClick={chooseImage}
            layout='fill'
            objectFit='contain'
            src={imageObjectUrl}
            alt={name}
          />
        </div>
      ) : (
        <PlusIcon
          onClick={chooseImage}
          className={styles.Image}
          color='var(--pri)'
        />
      )}
      <AutoGrowingTextarea
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={[styles.Name, styles.TextareaWrapper].join(' ')}
        placeholder='Name'
      />
      <AutoGrowingTextarea
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className={styles.TextareaWrapper}
        placeholder='position'
      />
      <input
        ref={inputRef}
        style={{ display: 'none' }}
        type='file'
        accept='.jpg, .png, .jpeg'
        onChange={onChange}
      />
      {name.trim() && position.trim() && image && (
        <button
          onClick={savePriest}
          className={[styles.Button, styles.AddButton].join(' ')}
          disabled={saving}
        >
          {saving ? <Spinner /> : 'Add'}
        </button>
      )}
      <FormError error={error} />
    </div>
  );
};

const Priests = ({ admin, authToken, apiBaseUrl }) => {
  const [priests, setPriests] = useState([]);

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState();
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState('');

  useEffect(() => {
    const getPriests = async () => {
      // get priests from  backend
      const priests = [
        {
          id: '1',
          name: 'Ven S. O. Adeleye',
          position: 'Ondo Archdeaconry',
          image: 'SA.png',
          imageUrl: '/images/SA.png',
        },
        {
          id: '2',
          name: 'Ven S. O. Adeleye',
          position: 'Ondo Archdeaconry',
          image: 'SA.png',
          imageUrl: '/images/SA.png',
        },
        {
          id: '3',
          name: 'Ven S. O. Adeleye',
          position: 'Ondo Archdeaconry',
          image: 'SA.png',
          imageUrl: '/images/SA.png',
        },
      ];
      setPriests(priests);
    };

    getPriests();
  }, []);

  const savePriest = async () => {
    setSaving(true);
    let priestData = new FormData();

    let id = `${name}${uuidv4()}`;

    priestData.append('id', id);
    priestData.append('name', name);
    priestData.append('image', image);
    priestData.append('position', position);
    const res = await axios
      .post(apiBaseUrl + 'create/priest', priestData, {
        headers: {
          Authorization: authToken,
        },
      })
      .then(({ data: { data, msgDb, success } }) => {
        // console.log(data);
        setPriests((v) => [...cloneDeep(v), data]);
        setImage(null);
        setName('');
        setPosition('');
        setSaving(false);
        alert('Created Successfully');
      })
      .catch((err) => {
        setSaving(false);
        alert('An Error occured');
      });
  };

  const deletePriest = (id, image) => {
    // delete priest image from server
    setDeleting(id);
    axios
      .delete(apiBaseUrl + 'delete/priest', {
        data: { id, image },
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
      })
      .then(({ data: { success, message } }) => {
        if (success) {
          setPriests((priests) =>
            priests
              .map((priest) => (priest.id === id ? null : { ...priest }))
              .filter((v) => v)
          );
          setDeleting('');
          alert('Removed');
        } else {
          alert(message);
          setDeleting('');
        }
      })
      .catch((err) => {
        alert('An error occured');
        setDeleting('');
      });
  };

  return (
    <div>
      <div className={styles.HeadingContainer}>
        <h1 className={styles.Heading}>Priests</h1>
      </div>
      <div className={styles.Priests}>
        {priests.map((priest, i) => {
          return (
            <Priest
              key={i}
              {...priest}
              deletePriest={deletePriest}
              deleting={deleting}
            />
          );
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
          saving={saving}
        />
      </div>
    </div>
  );
};

export default Priests;
