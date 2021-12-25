

const Image = ({ file, alt, ...rest }) => {
	return (
		<img src={URL.createObjectURL(file)} alt={alt} {...rest}/>
	)
}

export default Image;