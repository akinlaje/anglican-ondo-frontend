import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../styles/AdminChurches.module.css';
import AutoGrowingTextarea from '../../components/AutoGrowingTextarea/AutoGrowingTextarea';
import FormError from '../../components/FormError/FormError';
import Spinner from '../../components/Spinner/Spinner';
import { FaPlusCircle as PlusIcon } from 'react-icons/fa';
import cloneDeep from 'lodash/cloneDeep';
import { MdLocationOn as LocationIcon } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

const AddChurch = ({
  name,
  setName,
  location,
  setLocation,
  image,
  setImage,
  saveChurch,
  saving
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
    <div className={[styles.Church, styles.NewChurch].join(' ')}>
      <AutoGrowingTextarea
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Church Name'
        className={[styles.TextareaWrapper, styles.Name].join(' ')}
      />
      <AutoGrowingTextarea
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder='Location'
        className={styles.TextareaWrapper}
      />
      <input
        ref={inputRef}
        style={{ display: 'none' }}
        type='file'
        accept='image/jpg, image/png, image/jpeg'
        onChange={onChange}
      />
      {image ? (
        <div className={styles.Image}>
          <Image
            onClick={chooseImage}
            layout='fill'
            objectFit='cover'
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
      <button
        className={styles.SaveButton}
        onClick={saveChurch}
        disabled={!name || !image || !location || saving}
      >
        {saving ? <Spinner /> : 'Save'}
      </button>
    </div>
  );
};

const Churches = ({ admin, authToken, apiBaseUrl }) => {
  // state for saved chrches
  const [churches, setChurches] = useState([]);

  // state for the new church
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [deleting, setDeleting] = useState('')

  useEffect(() => {
    const getChurches = async () => {
      // get the saved churches
      const churches = [
        {
          id: '1',
          name: 'All Saints Anglican Church. Headquarters of Ondo Archdeaconry',
          location: 'No 32 Oke Aluko Street, Ondo',
          image: 'all-saints-church-2.jpg',
          imageUrl: '/images/all-saints-church-2.jpg'
        },
        {
          id: '2',
          name: 'St. Peters Anglican Church. Headquarters of Araromi Archdeaconry',
          location: 'Araromi Obu',
          image: 'st-peters-church.jpg',
          imageUrl: '/images/st-peters-church.jpg'
        }
      ];
      setChurches(churches);
    };
    getChurches();
  }, []);

  const saveChurch = () => {
    // save to backend
    if (!name) return setError(' Please input a name');
    if (!location) return setError(' Please input a location');

    // save church
    setSaving(true)

    let churchData = new FormData();
    churchData.append('name', name);
    churchData.append('image', image);
    churchData.append('location', location);
    churchData.append('id', uuidv4());

    axios
      .post(apiBaseUrl + 'create/church', churchData, {
        headers: {
          Authorization: authToken
        }
      })
      .then(({ data: { data, msgDb, success } }) => {
        setChurches((v) => [...cloneDeep(v), data]);
        setName('');
        setLocation('');
        setImage(null);
        setSaving(false);
        alert('Created Successfully');
      })
      .catch(err => {
        setSaving(false);
        alert('An Error occured');
      });
  };

  const deleteChurch = (id, image) => {
    // delete church image from server
    axios
      .delete(
        apiBaseUrl + 'delete/church', 
        {
          data: { id, image },
          headers: {
            'Content-Type': 'application/json',
            Authorization: authToken
          },
        }
      )
      .then(({ data: { success, message } }) => {
        if (success) {
          setChurches((churches) =>
            churches
              .map((church) => (church.id === id ? null : { ...church }))
              .filter((v) => v)
          )
          setDeleting('')
          alert('Deleted')
        } else {
          alert(message)
          setDeleting('')
        }
      })
      .catch(err => {
        alert('An error occured')
      });
  };

  return (
    <div>
      <div className={styles.HeadingContainer}>
        <h1 className={styles.Heading}>Churches</h1>
      </div>
      <div className={styles.Churches}>
        {churches.map(({ name, location, image, imageUrl, id }, i) => {
          return (
            <div key={i} className={styles.Church}>
              <div className={styles.Info}>
                <h3 className={styles.Name}>{name}</h3>
                <div className={styles.Location}>
                  <LocationIcon color='#000' size='1.7em' style={{ marginRight: '10px' }} />
                  {location}
                </div>
              </div>
              <div className={styles.Image}>
                <Image
                  layout='fill'
                  objectFit='cover'
                  src={imageUrl}
                  alt={name}
                />
              </div>
              <button
                className={styles.DeleteButton}
                onClick={() => deleteChurch(id, image)}
                disabled={deleting === id}
              >
                {deleting === id ? <Spinner color='#000' /> : 'Delete'}
              </button>
            </div>
          );
        })}
        <AddChurch
          name={name}
          setName={setName}
          location={location}
          setLocation={setLocation}
          saveChurch={saveChurch}
          image={image}
          setImage={setImage}
          saving={saving}
        />
        {error && <FormError error={error} />}
      </div>
    </div>
  );
};

export default Churches;
