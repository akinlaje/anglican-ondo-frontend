import { useState } from 'react';
import UploadImage from '../../components/UploadImage/UploadImage';
import AutoGrowingTextarea from '../../components/AutoGrowingTextarea/AutoGrowingTextarea';
import styles from '../../styles/AdminNews.module.css';
import { FaNewspaper as NewsIcon } from 'react-icons/fa';
import { saveFileToNextServer } from '../../utils';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import FormError from '../../components/FormError/FormError';

const News = ({ admin, authToken }) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState();
  const [location, setLocation] = useState('Ondo - test');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!admin.id) return;

    const imgRes = await saveFileToNextServer(image);
    console.log(imgRes);

    if (imgRes?.status !== 200) {
      // error has occured while saving image to next
      setError('An Error Occured');
    }

    let formData = new FormData();
    formData.append('title', title);
    formData.append('details', details);
    formData.append('image', image);
    formData.append('location', location);
    const res = await axios
      .post('http://localhost:5000/api/create/news', formData, {
        headers: {
          Authorization: authToken,
        },
      })
      .then((data) => {
        console.log(data);
      });

    // check if server returned an error
    const error = false;

    if (error) {
      // set the error message
      setError(error);
    }

    setSaving(false);
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
          <UploadImage
            file={image}
            setFile={setImage}
            name='image'
            className={styles.UploadImage}
          />
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
        <FormError error={error} />
        <button type='submit' className={styles.SubmitButton} disabled={saving}>
          {saving ? <Spinner /> : 'Post'}
        </button>
      </form>
    </div>
  );
};

export default News;
