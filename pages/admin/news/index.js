import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../../styles/AdminNews.module.css';
import axios from 'axios';
import Pagination from '../../../components/Pagination/Pagination';
import { BASE_URL as apiBaseUrl } from '../../../utils';

const News = (props) => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);

  const numPerPage = 9;

  const { authToken } = props;

  const router = useRouter();

  useEffect(() => {
    // fetch all news here
    const getNews = async () => {
      axios.get(props.apiBaseUrl + 'read/news').then((e) => {
        setNews(e.data.msg);
      });
    };
    getNews();
  }, []);

  const editNews = (id) => router.push('/admin/news/edit/' + id);

  const newNews = () => router.push('/admin/news/create');

  const deleteNews = (id, image) => {
    axios
      .delete(apiBaseUrl + 'delete/news', {
        data: { id, image },
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
      })
      .then(({ data: { success, message } }) => {
        if (success) {
          setNews((newsItem) =>
            news
              .map((newsItem) => (newsItem.id === id ? null : { ...newsItem }))
              .filter((v) => v)
          );
          alert('Deleted');
        } else {
          alert(message);
        }
      })
      .catch((err) => {
        alert('An error occured');
      });
  };

  const filteredNews = news
    .map((news, i) => {
      const newsNumber = i + 1;
      const pageMaxNumber = page * numPerPage;
      const lastPageMaxNumber = (page - 1) * numPerPage;
      return lastPageMaxNumber < newsNumber && newsNumber <= pageMaxNumber
        ? news
        : null;
    })
    .filter((v) => v);

  return (
    <div className={styles.Container}>
      <div className={styles.Members}>
        {filteredNews.map((news, i) => {
          const { id, imageUrl, title, image } = news;
          return (
            <div key={i} className={styles.MemberWrapper}>
              <div className={styles.Member}>
                <div className={styles.ImageWrapper}>
                  <Image
                    src={imageUrl}
                    layout='fill'
                    objectFit='contain'
                    alt={title}
                  />
                </div>
                <h3>{title}</h3>
                <button onClick={() => editNews(id)} className={styles.btn2}>
                  Edit
                </button>
                <button
                  onClick={() => deleteNews(id, image)}
                  className={styles.btn2}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        <button onClick={() => newNews()} className={styles.btn}>
          New News
        </button>
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        numPerPage={numPerPage}
        numItems={news.length}
      />
    </div>
  );
};

export default News;
