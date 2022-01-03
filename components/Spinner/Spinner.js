import { CgSpinner } from 'react-icons/cg';
import styles from './Spinner.module.css';

const Spinner = ({className, color, size, ...rest}) => {

	return (
		<CgSpinner 
			className={[styles.Icon, className].join(' ')} 
			color={color || '#ccc'} 
			size={size || '2em'} 
			{...rest} 
		/>
	)
}

export default Spinner;