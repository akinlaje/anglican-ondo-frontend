import { useState } from 'react';
import UploadImage from '../../../components/UploadImage/UploadImage';
import AutoGrowingTextarea from '../../../components/AutoGrowingTextarea/AutoGrowingTextarea';
import styles from '../../styles/AdminNews.module.css';
import { FaNewspaper as NewsIcon } from 'react-icons/fa';
import { JSONToFormData } from '../../../utils';

const News = () => {
	const [title, setTitle] = useState('');
	const [details, setDetails] = useState('');
	const [image, setImage] = useState();

	const submit = async e => {
	    e.preventDefault();

	    let data = JSONToFormData({
	    	title,
	    	details,
	    	image
	    })

	  //   for (const pair of data.entries()) {
			//   console.log(pair[0]+ ', ' + pair[1]); 
			// }

	    // const res = await fetch('/api/news', {
	    //   method: 'POST',
	    //   body: data,
	    // })
	    // console.log(res);
	  }

	return (
		<div className={styles.Container}>
			<div className={styles.HeadingContainer}>
				<h1 className={styles.Heading}>
					<NewsIcon size='50px' className={styles.HeadingIcon} />
					News
				</h1>
			</div>
			<form onSubmit={submit}>
				<div className={styles.FormInner}>
					<UploadImage file={image} setFile={setImage} name='image' />
					<div className={styles.TextContainer}>
						<input 
							className={styles.Title} 
							value={title}
							onChange={e => setTitle(e.target.value)} 
							placeholder='News Title' 
							name='title'
						/>
						<AutoGrowingTextarea 
							className={styles.AutoTextareaWrapper} 
							value={details}
							onChange={e => setDetails(e.target.value)}
							placeholder='News Details' 
							name='details'
						/>
					</div>
				</div>
				<button type='submit' className={styles.SubmitButton}>Post</button>
			</form>
		</div>
	)
}

export default News;