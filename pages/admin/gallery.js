import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/AdminGallery.module.css';
import UploadImage from '../../components/UploadImage/UploadImage';
import Spinner from '../../components/Spinner/Spinner';
import cloneDeep from 'lodash/cloneDeep';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const AddImage = ({ image, setImage, title, setTitle, saveImage, saving }) => {
  return (
    <div className={[styles.ImageWrapper, styles.AddImageWrapper].join(' ')}>
      <UploadImage className={styles.Image} file={image} setFile={setImage} />
      <input
        className={styles.Input}
        placeholder={'Add Title'}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {image && title && (
        <button
          onClick={saveImage}
          className={[styles.SaveButton, styles.Button].join(' ')}
          disabled={saving}
        >
          {saving ? <Spinner coolor='var(--pri)' /> : 'Save'}
        </button>
      )}
    </div>
  );
};

const Gallery = ({ admin, authToken, apiBaseUrl }) => {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState();
  const [title, setTitle = { setTitle }] = useState('');
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState('');

  useEffect(() => {
    const getImages = async () => {
      // get images from backend
      const images = [
        { imageUrl: '/images/ae.jpg', image: 'ae.jpg', id: '0' },
        { imageUrl: '/images/ae.jpg', image: 'ae.jpg', id: '1' },
      ];
      setImages(images);
    };

    getImages();
  }, []);

  const saveImage = () => {
    setSaving(true);
    let galleryData = new FormData();
    galleryData.append('id', uuidv4());
    galleryData.append('title', title);
    galleryData.append('image', image);

    axios
      .post(apiBaseUrl + 'create/gallery', galleryData, {
        headers: {
          Authorization: authToken,
        },
      })
      .then(({ data: { data, msgDb, success } }) => {
        setImages((v) => [...cloneDeep(v), data]);
        setImage(null);
        setTitle('');
        setSaving(false);
        alert('Created Successfully');
      })
      .catch((err) => {
        setSaving(false);
        alert('An Error occured');
      });
  };

  const deleteImage = (id, image) => {
    // delete image from server
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
          setImages((images) =>
            images
              .map((image) => (image.id === id ? null : { ...image }))
              .filter((v) => v)
          );
          setDeleting('');
          alert('Deleted');
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
    <div className={styles.Container}>
      <div className={styles.AddImageContainer}>
        {images.map(({ id, image, imageUrl }, i) => (
          <div key={i} className={styles.ImageWrapper}>
            <Image
              className={styles.Image}
              layout='fill'
              objectFit='cover'
              alt={image}
              src={imageUrl}
            />
            <button
              className={styles.Button}
              onClick={() => deleteImage(id, image)}
              disabled={deleting === id}
            >
              {deleting === id ? <Spinner color='#000' /> : 'Delete'}
            </button>
          </div>
        ))}
        <AddImage
          image={image}
          setImage={setImage}
          title={title}
          setTitle={setTitle}
          saveImage={saveImage}
          saving={saving}
        />
      </div>
    </div>
  );
};

export default Gallery;
