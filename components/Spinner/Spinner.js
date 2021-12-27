import { CgSpinner } from 'react-icons/cg';
import styles from './Spinner.module.css';

const Spinner = ({className, ...rest}) => {

	return (
		<Spinner className={[styles.Icon, className].join(' ')} {...rest} />
	)
}

export default Spinner;