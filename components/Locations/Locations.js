import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Locations.module.css';
import Pagination from '../Pagination/Pagination';
import Spinner from '../Spinner/Spinner';

const Location = ({ id, name, image, location, imageUrl }) => {
	return (
		<div className={styles.Location}>
			<div className={styles.Info}>
				<h3 className={styles.LocationName}>{name}</h3>
				<div>{location}</div>
			</div>
			<div className={styles.LocationImage}>
				<Image alt={name} src={imageUrl} layout='fill' objectFit='cover' />
			</div>
		</div>
	)
}

const Locations = ({ locations, searchTerm, setSearchedTerm }) => {
	const [page, setPage] = useState(1)
	const [searching, setSearching] = useState(false)
	const [searchResults, setSearchResults] = useState()

	useEffect(() => {
		if (searchTerm) {
			setSearching(true)
			const searchLocationsByName = () => {
				if (!searchTerm.length) return locations
				const search = (str, term) => {
					const result = { display: str, foundTerm: false }
					if (!str.length) return result
					if (!term.length) return result
					const indexOf = str.toLowerCase().indexOf(term.toLowerCase())
					const isPresent = indexOf > -1
					if (!isPresent) return result
					const before = str.substr(0, indexOf)
					const matchString = str.substr(indexOf, term.length)
					const after = search(str.substr(indexOf + term.length), term).display
					result.display = (
						<>
							{before}
							<span style={{ color: 'var(--pri)' }}>{matchString}</span>
							{after}
						</>
					)
					result.foundTerm = true
					return result
				}
				
				return locations.map((location, i) => {
					const { display, foundTerm } = search(location.name, searchTerm)
					if (foundTerm) return {...location, name: display}
					return null
				}).filter(v => v)
			}
			setSearchResults(searchLocationsByName())
			setSearching(false)
			setSearchedTerm(searchTerm)
		} else {
			setSearching(false)
			setSearchResults(null)
		}
	}, [searchTerm, locations])

	const numPerPage = 4

	const locationList = (searchResults ? searchResults : locations).map((location, i) => {
		const locationNumber = i + 1
		const pageMaxNumber = page * numPerPage
		const lastPageMaxNumber = (page - 1) * numPerPage
		return (
			lastPageMaxNumber < locationNumber &&
			locationNumber <= pageMaxNumber ? location : null
		)
	}).filter(v => v)

	return (
		<>
			{searchTerm.length ? (
				<h2>
					{ (searchTerm && !locationList.length ? 'No matches for ': 'Search Results for ') }
					<span style={{ color: 'var(--pri)' }}>{"'" + searchTerm + "'"}</span>
				</h2>
			) : ''}
			<div className={styles.Container}>
				{
					searching ? (
						<div 
							style={{
								width: 'fit-content',
								height: 'fit-content',
								margin: 'auto'
							}}
						>
							<Spinner />
						</div>
					) : 
					locationList.map((location, i) => (
						<Location key={i} {...location} />
					))
				}
				<Pagination 
					page={page} 
					setPage={setPage} 
					numPerPage={numPerPage} 
					numItems={locations.length} 
				/>
			</div>
		</>
	)
}

export default Locations;