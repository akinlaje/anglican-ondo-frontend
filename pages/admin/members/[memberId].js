import { useEffect, useState } from 'react'
import styles from '../../../styles/Member.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { BsArrowLeft as BackIcon } from 'react-icons/bs'

const Member = () => {
	const [member, setMember] = useState({})

	const router = useRouter()

	const { query: { memberId } } = router

	useEffect(() => {
		const getMember = async () => {
			// get member
			const member = {
			    id: '1',
			    surname: 'Members Surname',
			    lastName: 'Members  LastName',
			    otherNames: 'Members OtherNames',
			    email: 'Members email@email.com',
			    archdeaconry: 'Members Archdeaconry',
			    church: 'Members Church',
			    birthDate: 'Members Birth Date',
			    weddingAnniversary: 'Members Wedding Anniversary',
			    roles: 'Members Roles',
			    society: 'Members Society',
			    phoneNumber: 'Members Phone Number',
			    imageUrl: '/images/ae.jpg'
			}
			setMember(member)
		}
		getMember()
	}, [memberId])

	const {
		surname,
		lastName, 
		otherNames,
		email,
		archdeaconry,
		church,
		birthDate,
		weddingAnniversary,
		roles,
		society,
		phoneNumber,
		imageUrl,
	} = member

	return (
		<>
			<Link href='/admin/members'>
				<a style={{ display: 'inline-block', height: '50px', lineHeight: '50px' }}>
					<BackIcon height='30px' style={{ marginRight: '20px' }} />
					Back
				</a>
			</Link>
			<div className={styles.Container}>
				<div className={styles.Image}>
					{imageUrl && (
						<Image 
							src={imageUrl} 
							layout='fill'
							objectFit='cover'
							alt={surname + ' ' + lastName} 
						/>
					)}
				</div>
				<div>
					Name : {lastName}
				</div>
				<div>
					Phone Number : {phoneNumber}
				</div>
				<div>
					Surname : {lastName}
				</div>
				<div>
					Other Names : {otherNames}
				</div>
				<div>
					Email : {email}
				</div>
				<div>
					Archdeaconry : {archdeaconry}
				</div>
				<div>
					Church : {church}
				</div>
				<div>
					Wedding Anniversary : {weddingAnniversary}
				</div>
				<div>
					Roles : {roles}
				</div>
				<div>
					Society : {society}
				</div>
			</div>
		</>
	)
}

export default Member