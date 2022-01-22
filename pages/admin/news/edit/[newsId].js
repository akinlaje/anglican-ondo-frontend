import { useRouter } from 'next/router'
import News from '../../../../components/News/News'

const Edit = (props) => {

	const router = useRouter()

	const { query: { newsId } } = router
	return (
		<News 
			{...props}
			newsId={newsId}
		/>
	)
}

export default Edit