import { useState } from 'react'
import styles from './SearchChurches.module.css'

const SearchChurches = ({ setSearchTerm, searchedTerm }) => {
	const [value, setValue] = useState('')

	const searched = value === searchedTerm

	const onChange = e => {
		setValue(e.target.value)
		if (!e.target.value) setSearchTerm('')
	}

	const search = () => searched ? null : setSearchTerm(value)

	return (
		<div className={styles.Container}>
			<input 
				value={value}
				onChange={onChange}
				placeholder='Find a church near me' 
				className={styles.Input} 
			/>
			<button className={styles.Button} onClick={search} disabled={searched || !value.length}>Search</button>
		</div>
	)
}

export default SearchChurches;