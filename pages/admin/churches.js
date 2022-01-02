import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../styles/AdminChurches.module.css';
import AutoGrowingTextarea from '../../components/AutoGrowingTextarea/AutoGrowingTextarea';
import FormError from '../../components/FormError/FormError';
import { FaPlusCircle as PlusIcon } from 'react-icons/fa';
import { JSONToFormData, saveFileToNextServer } from '../../utils';
import cloneDeep from 'lodash/cloneDeep';
import axios from 'axios';

const AddChurch = ({
  name,
  setName,
  location,
  setLocation,
  image,
  setImage,
  saveChurch,
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
        accept='.jpg, png, jpeg'
        onChange={onChange}
      />
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
      <button
        className={styles.SaveButton}
        onClick={saveChurch}
        disabled={!name || !image || !location}
      >
        Save
      </button>
    </div>
  );
};

const Churches = ({ admin, authToken }) => {
  // state for saved chrches
  const [churches, setChurches] = useState([]);

  // state for the new church
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getChurches = async () => {
      // get the saved churches
      const churches = [
        {
          id: '1',
          name: 'ST. Stephen Cathedral',
          location: 'No 32 Oke Aluko Street, Ondo',
          image: 'church.jpg',
        },
        {
          id: '2',
          name: 'ST. Stephen Cathedral',
          location: 'No 32 Oke Aluko Street, Ondo',
          image: 'church.jpg',
        },
        {
          id: '3',
          name: 'ST. Stephen Cathedral',
          location: 'No 32 Oke Aluko Street, Ondo',
          image: 'church.jpg',
        },
      ];
      setChurches(churches);
    };
    getChurches();
  }, []);

  const saveChurch = async () => {
    // save to next server
    const imgRes = await saveFileToNextServer(image);
    console.log(imgRes);

    if (imgRes?.status !== 200) {
      setError('An Error Occured');
    }

    // save to backend
    const newChurch = {
      name,
      location,
      image,
    };

    console.log(newChurch);
    if (!name) return setError(' Please input a name');
    if (!location) return setError(' Please input a location');

    // save church

    if (!admin.id) return;

    let churchData = new FormData();
    churchData.append('name', name);
    churchData.append('image', image);
    churchData.append('location', location);
    const res = await axios
      .post('http://localhost:5000/api/create/church', churchData, {
        headers: {
          Authorization: authToken,
        },
      })
      .then((data) => {
        console.log(data);
        setChurches((v) => [...cloneDeep(v), newChurch]);
        setName('');
        setLocation('');
        setImage(null);
        alert('Created Successfully');
      });

    setChurches((v) => [...cloneDeep(v), newChurch]);
    setName('');
    setLocation('');
    setImage(null);
  };

  const deleteChurch = async (id) => {
    // delete church from nextjs server
    let imageName;
    for (let i = churches.length - 1; i >= 0; i--) {
      if (churches[i].id === id) {
        imageName = churches[i].image;
        break;
      }
    }

    console.log(imageName);
    const imgRes = await deleteFileFromNextServer(imageName);
    console.log(imgRes);

    if (imgRes?.status !== 200) {
      // error has occured while saving image to next
      setError('An Error Occured');
    }

    // delete church image from server

    setChurches((churches) =>
      churches
        .map((church) => (church.id === id ? null : { ...church }))
        .filter((v) => v)
    );
  };

  return (
    <div>
      <div className={styles.HeadingContainer}>
        <h1 className={styles.Heading}>Churches</h1>
      </div>
      <div className={styles.Churches}>
        {churches.map(({ name, location, image, id }, i) => {
          return (
            <div key={i} className={styles.Church}>
              <div className={styles.Info}>
                <h3 className={styles.Name}>{name}</h3>
                <div className={styles.Location}>{location}</div>
              </div>
              <div className={styles.Image}>
                <Image
                  layout='fill'
                  objectFit='contain'
                  src={'/uploads/' + image}
                  alt={name}
                />
              </div>
              <button
                className={styles.DeleteButton}
                onClick={() => deleteChurch(id)}
              >
                Delete
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
        />
        {error && <FormError error={error} />}
      </div>
    </div>
  );
};

export default Churches;
