import News from '../../../components/News/News'

const create = (props) => {
	return (
		<News 
			{...props}
			apiEndpoint='create/news'	
		/>
	)
}

export default create