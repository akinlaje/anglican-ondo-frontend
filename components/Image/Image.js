

const Image = ({ file, alt, ...rest, src }) => {
	return (
		<img src={src ? src : URL.createObjectURL(file)} alt={alt} {...rest}/>
	)
}

export default Image;