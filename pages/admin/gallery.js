import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/AdminGallery.module.css';
import UploadImage from '../../components/UploadImage/UploadImage';
import cloneDeep from 'lodash/cloneDeep';
import { saveFileToNextServer, deleteFileFromNextServer } from '../../utils';
import axios from 'axios';

const AddImage = ({ image, setImage, title, setTitle, saveImage }) => {
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
        >
          Save
        </button>
      )}
    </div>
  );
};

const Gallery = ({ admin, authToken }) => {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState();
  const [title, setTitle = { setTitle }] = useState('');

  console.log(images);

  useEffect(() => {
    const getImages = async () => {
      // get images from backend
      const images = [
        { image: 'ae.jpg', id: '0' },
        { image: 'ae.jpg', id: '1' },
      ];
      setImages(images);
    };

    getImages();
  }, []);

  const saveImage = async () => {
    // save image to nextjs server

    const imgRes = await saveFileToNextServer(image);
    console.log(imgRes);

    if (imgRes?.status !== 200) {
      // error has occured while saving image to next
      setError('An Error Occured');
    }

    if (!admin.id) return;

    let galleryData = new FormData();
    galleryData.append('title', title);
    galleryData.append('image', image);
    const res = await axios
      .post('http://localhost:5000/api/create/gallery', galleryData, {
        headers: {
          Authorization: authToken,
        },
      })
      .then((data) => {
        console.log(data);
        const id = String(images.length);

        const newImage = {
          image: image.name,
          id,
        };
        setImages((v) => [...cloneDeep(v), newImage]);
        setImage(null);
        setTitle('');
        alert('Created Successfully');
      });
  };

  const deleteImage = async (id) => {
    // delete image from nextjs server
    let imageName;
    for (let i = images.length - 1; i >= 0; i--) {
      if (images[i].id === id) {
        imageName = images[i].image;
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

    // delete image from server

    setImages((images) =>
      images
        .map((image) => (image.id === id ? null : { ...image }))
        .filter((v) => v)
    );
  };

  return (
    <div className={styles.Container}>
      <div className={styles.AddImageContainer}>
        {images.map((img, i) => (
          <div key={i} className={styles.ImageWrapper}>
            <Image
              className={styles.Image}
              layout='fill'
              objectFit='cover'
              alt={img.image}
              src={`/uploads/${img.image}`}
            />
            <button
              className={styles.Button}
              onClick={() => deleteImage(img.id)}
            >
              Delete
            </button>
          </div>
        ))}
        <AddImage
          image={image}
          setImage={setImage}
          title={title}
          setTitle={setTitle}
          saveImage={saveImage}
        />
      </div>
    </div>
  );
};

export default Gallery;
