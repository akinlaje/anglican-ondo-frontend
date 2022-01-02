import { useState } from 'react';
import UploadImage from '../../components/UploadImage/UploadImage';
import AutoGrowingTextarea from '../../components/AutoGrowingTextarea/AutoGrowingTextarea';
import styles from '../../styles/AdminNews.module.css';
import { FaNewspaper as NewsIcon } from 'react-icons/fa';
import axios from 'axios';

const News = ({ admin, authToken }) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState();
  const [location, setLocation] = useState('Ondo - test');

  const submit = async (e) => {
    e.preventDefault();
    // console.log(image);
    // return
    if (!admin.id) return;

    const data = {
      title,
      details,
      image,
      location,
    };
    console.log('data object', data);

    let formData = new FormData();

    formData.append('title', title);
    formData.append('details', details);
    formData.append('image', image);
    formData.append('location', location);

    const res = await axios.post(
      'http://localhost:5000/api/create/news',
      formData,
      {
        headers: {
          Authorization: authToken,
        },
      }
    );

    console.log(res);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.HeadingContainer}>
        <h1 className={styles.Heading}>
          <NewsIcon size='50px' className={styles.HeadingIcon} />
          News
        </h1>
      </div>
      <form onSubmit={submit} method='POST' encType='multipart/form-data'>
        <div className={styles.FormInner}>
          <UploadImage file={image} setFile={setImage} name='image' />
          <div className={styles.TextContainer}>
            <input
              className={styles.Title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='News Title'
              name='title'
            />
            <AutoGrowingTextarea
              className={styles.AutoTextareaWrapper}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder='News Details'
              name='details'
            />
          </div>
        </div>
        <button type='submit' className={styles.SubmitButton}>
          Post
        </button>
      </form>
    </div>
  );
};

export default News;
