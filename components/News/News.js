import { useState, useEffect } from 'react';
import UploadImage from '../UploadImage/UploadImage';
import AutoGrowingTextarea from '../AutoGrowingTextarea/AutoGrowingTextarea';
import styles from '../../styles/AdminNews.module.css';
import { FaNewspaper as NewsIcon } from 'react-icons/fa';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import FormError from '../FormError/FormError';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';

const News = ({ admin, authToken, apiBaseUrl, newsId }) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState('');
  const [location, setLocation] = useState('Ondo');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [url, setUrl] = useState('create/news');
  const [edit, setEdit] = useState(false);
  // when in edit mode
  const [eId, setEId] = useState('');

  const router = useRouter();

  useEffect(() => {
    if (!newsId) return;
    // if there is a news id, fetch that news and set the state to it
    const getNews = async () => {
      setLoading(true);
      axios.post(apiBaseUrl + 'single/news', { id: newsId }).then((e) => {
        // console.log(e);
        let news = e.data.msg;
        console.log(news);
        setEdit(true);
        const { title, details, imageUrl, location, id } = news[0];
        setTitle(title);
        setDetails(details);
        setImageUrl(imageUrl);
        setLocation(location);
        setImage(imageUrl);
        setEId(id);
        setLoading(false);
        setUrl('update/news');
      });
    };
    getNews();
  }, [newsId, apiBaseUrl]);

  const submit = (e) => {
    e.preventDefault();
    setSaving(true);
    let formData = new FormData();

    let id;
    if (newsId) {
      id = eId;
    } else {
      id = `${title}${uuidv4()}`;
    }

    formData.append('id', id);
    formData.append('title', title);
    formData.append('details', details);
    formData.append('image', image);
    formData.append('location', location);

    axios
      .post(apiBaseUrl + url, formData, {
        headers: {
          Authorization: authToken,
        },
      })
      .then((data) => {
        setTitle('');
        setDetails('');
        setImage('');
        setLocation('');
        alert('Created Successfully');
        setSaving(false);
        console.log(data);
        router.back();
      })
      .catch((err) => {
        setSaving(false);
        alert('An Error occured');
        console.log(err);
      });

    // check if server returned an error
    const error = false;

    if (error) {
      // set the error message
      setError(error);
    }

    setSaving(false);
  };

  if (loading) return <h2>LOADING...</h2>;

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
            initialImageUrl={image}
            file={image}
            editing={edit}
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
