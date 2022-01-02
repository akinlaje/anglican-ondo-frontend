import { useState, useEffect } from 'react'
import styles from '../../styles/AdminHome.module.css'

const Home = () => {
	const [stats, setStats] = useState([])

	useEffect(() => {
		const getStats = async () => {
			// get stats here
			const stats = [
				{
					name: 'Registered Members',
					number: 25
				},
				{
					name: 'Registered Members',
					number: 25
				},
				{
					name: 'Registered Members',
					number: 25
				},
				{
					name: 'Registered Members',
					number: 25
				},
				{
					name: 'Registered Members',
					number: 25
				},
				{
					name: 'Registered Members',
					number: 25
				},
				{
					name: 'Registered Members',
					number: 25
				},
				{
					name: 'Registered Members',
					number: 25
				},
				{
					name: 'Registered Members',
					number: 25
				},
			]
			setStats(stats)
		}
		getStats()
	}, [])

	return (
		<div className={styles.Container}>
			{stats.map((stat, i) => (
				<div key={i} className={styles.Stat}>
					<h2 className={styles.StatNumber}>{stat.number}</h2>
					<div className={styles.StatName}>{stat.name}</div>
				</div>
			))}
		</div>
	)
}

export default Home;