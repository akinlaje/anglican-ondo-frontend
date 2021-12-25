import { forwardRef } from 'react'
import styles from './AutoGrowingInput.module.css'

const AutoGrowingInput = forwardRef(({ 
	className, 
	onInput, 
	...rest 
}, ref) => {
	const grow = e => {
		e.target.parentElement.dataset.value = e.target.value
	}

	const props = {
		ref: ref,
		onInput: grow,
		className: [
			styles.Input,
			className
		].join(' '),
		...rest
	}
	return (
		<span className={styles.Wrapper}>
			<input {...props}/>
		</span>
	)
})

export default AutoGrowingInput