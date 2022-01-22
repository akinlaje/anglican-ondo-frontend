import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/AdminGallery.module.css';
import UploadImage from '../../components/UploadImage/UploadImage';
import Spinner from '../../components/Spinner/Spinner';
import cloneDeep from 'lodash/cloneDeep';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { DateTime } from 'luxon'

const AddImage = ({ image, setImage, title, setTitle, saveImage, saving }) => {
  return (
    <div className={[styles.ImageWrapper, styles.AddImageWrapper].join(' ')}>
      <UploadImage 
        className={styles.Image} 
        file={typeof image === 'string' ? null : image} 
        initialImageUrl={typeof image === 'string' ? image : null} 
        setFile={setImage} 
      />
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
  const [editing, setEditing] = useState()
  const [updating, setUpdating] = useState()

  useEffect(() => {
    const getImages = async () => {
      try {
        // get images from backend
        const { data: { msg: images } } = await axios.get(apiBaseUrl + 'read/gallery')
        setImages(images);
      } catch (error) {
        alert('An Error Ocurred while fetching Images')
      }
    };

    getImages();
  }, [apiBaseUrl]);

  const saveImage = () => {
    setSaving(true);
    let galleryData = new FormData();

    let id = `${title}${uuidv4()}`;

    galleryData.append('id', id);
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

  const updateImage = id => {
    setUpdating(id);
    let galleryData = new FormData();

    const { id, title, image } = images.find(image => image.id === id)

    const month = DateTime.now().toFormat('MMMM')
    console.log(month)
    // return

    galleryData.append('id', id);
    galleryData.append('title', title);
    galleryData.append('image', image);
    galleryData.append('monthCreated', month);

    axios
      .post(apiBaseUrl + 'update/gallery', galleryData, {
        headers: {
          Authorization: authToken,
        },
      })
      .then(({ data: { data, msgDb, success } }) => {
        setImages((galleryImages) => galleryImages.map(galleryImage => {
          if (galleryImage.id === id) return data
          return cloneDeep(galleryImage)
        }));
        setEditing(null);
        setUpdating(null);
        alert('Updated Successfully');
      })
      .catch((err) => {
        setEditing(null);
        setUpdating(null);
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
        {images.map(({ id, image, imageUrl, title }, i) => {
          if (editing === id) {
            return (
              <AddImage
                key={id}
                image={imageUrl}
                setImage={(newImage) => setImages(images => images.map(image => {
                  if (image.id === id) {
                    return { ...cloneDeep(image), image: newImage }
                  }
                  return cloneDeep(image)
                }))}
                title={title}
                setTitle={(newTitle) => setImages(images => images.map(image => {
                  if (image.id === id) {
                    return { ...cloneDeep(image), title: newTitle }
                  }
                  return cloneDeep(image)
                }))}
                saveImage={() => updateImage(id)}
                saving={updating === id}
              />
            )
          }
          return (
            <div key={i} className={styles.ItemContainer}>
              <div className={styles.ImageWrapper}>
                <Image
                  className={styles.Image}
                  layout='fill'
                  objectFit='cover'
                  alt={image}
                  src={imageUrl}
                />
              </div>
              <div className={styles.ButtonContainer}>
                <button
                  className={styles.Button}
                  onClick={() => deleteImage(id, image)}
                  disabled={deleting === id}
                >
                  {deleting === id ? <Spinner color='#000' /> : 'Delete'}
                </button>
                {editing !== id && (
                  <button
                    className={styles.Button}
                    onClick={() => setEditing(id)}
                  >
                    Edit
                  </button>
                )}
              </div>              
            </div>
          )
        })}
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
