import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const News = (props) => {
	const [news, setNews] = useState([])

	const { authToken } = props

	const router = useRouter()

	useEffect(() => {
		// fetch all news here
		const getNews = async () => {
			const news = [
				{
					id: '01',
					title: 'News 1'
				},
				{
					id: '02',
					title: 'News 2'
				},
				{
					id: '03',
					title: 'News 3'
				},
			]
			setNews(news)
		}
		getNews()
	}, [])

	const editNews = (id) => router.push('/admin/news/edit/' + id)

	const deleteNews = (id, image) => {
    axios
      .delete(apiBaseUrl + 'delete/news', {
        data: { id },
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
      })
      .then(({ data: { success, message } }) => {
        if (success) {
          setNews((newsItem) =>
            churches
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

	return (
		<div >
			{news.map(({ title, id }) => {
				return (
					<div key={id}>
						<h3>{title}</h3>
						<button onClick={() => editNews(id)}>Edit</button>
						<button onClick={() => deleteNews(id)}>Delete</button>
					</div>
				)
			})}
		</div>
	)
}

export default News