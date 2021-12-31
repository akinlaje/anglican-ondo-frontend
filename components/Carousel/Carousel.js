import { useState, useRef, createRef, useEffect, useMemo, useCallback, Children } from 'react'
import styles from './Carousel.module.css'
import {
	GrFormPrevious,
	GrFormNext
} from 'react-icons/gr'

const Carousel = ({ children, NextIcon=GrFormNext, PrevIcon=GrFormPrevious, indicatorColor='#fff', arrowColor='#fff', className, iconClassName='' }) => {
	const [height, setHeight] = useState('')
	const [left, setLeft] = useState(0)
	const [activeChildIndex, setActiveChildIndex] = useState(0)
	
	const intervalId = useRef()

	const childrenWrapperRef = useRef()

	const childrenLength = Children.toArray(children).length

	const width = 100

	const refs = useMemo(() => {
		return Array(childrenLength).fill().map((_, i) => createRef())
	}, [childrenLength])

	useEffect(() => {
		const updateHeight = v => setHeight(v)
		window.addEventListener('resize', updateHeight)
		return () => window.removeEventListener('resize', updateHeight)
	}, [])

	useEffect(() => {
		if (!childrenWrapperRef.current) return
		setHeight(childrenWrapperRef.current.clientHeight)
	}, [])

	useEffect(() => {
		const newleft = activeChildIndex === (childrenLength - 1) ? 0 : (activeChildIndex + 1) * width
		setLeft(newleft)
	}, [activeChildIndex, width, childrenLength])

	const startInterval = useCallback(() => {
		if (intervalId.current) clearInterval(intervalId.current)
		const id = setInterval(() => {
 			setActiveChildIndex(v => v === (childrenLength - 1) ? 0 : v + 1)
 		}, 4000)
 		intervalId.current = id
	}, [childrenLength])

 	useEffect(() => {
 		startInterval()
 		return () => clearInterval(intervalId.current)
 	}, [startInterval])

	const next = () => {
		if (activeChildIndex === (childrenLength - 1)) {
			setActiveChildIndex(0)
		} else {
			setActiveChildIndex(activeChildIndex + 1)
		}
		startInterval()
	}
	const prev = () => {
		if (activeChildIndex === 0) {
			setActiveChildIndex(childrenLength - 1)
		} else {
			setActiveChildIndex(activeChildIndex - 1)	
		} 
		startInterval()
	}

	let childrenWrapperStyle = {}

	if (height !== '') {
		childrenWrapperStyle = {
			position: 'absolute',
			top: '0',
			left: '-' + String(left) + 'vw',
			transition: 'left ease-out 400ms'
		}
	}

	return (
		<div className={[styles.Container, className].join(' ')}>
			<div style={{ height }}>
				<PrevIcon size='2em' color={arrowColor} onClick={prev} className={[styles.NavIcon, styles.PrevIcon].join(' ')} />
				<div ref={childrenWrapperRef} style={childrenWrapperStyle} className={styles.ChildrenWrapper}>
					{Children.map(children, (child, i) => {
						return (
							<div key={i} ref={refs[i]} style={{ width: String(width) + 'vw' }} className={styles.Child}>{child}</div>
						)
					})}
				</div>
				<NextIcon size='2em' color={arrowColor} onClick={next} className={[styles.NavIcon, styles.NextIcon].join(' ')} />
			</div>
			<div className={styles.IndicatorWrapper}>
				{Children.map(children, (_, i) => {
					const isActive = i === 0 ? (activeChildIndex === (childrenLength - 1)) : (i === activeChildIndex + 1)
					return (
						<div key={i}
							style={{ backgroundColor: indicatorColor }}
							onClick={() => setActiveChildIndex(i)}
							className={[
								styles.Indicator,
								isActive ? styles.Active : ''
							].join(' ')}
						></div>
					)
				})}
			</div>
		</div>
	)
}

export default Carousel