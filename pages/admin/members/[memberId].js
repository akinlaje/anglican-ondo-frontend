import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Member = () => {
	const [member, setMember] = useState({})

	const router = useRouter()

	const { query: { memberId } } = router

	useEffect(() => {
		const getMember = async () => {
			// get member
			const member = {}
			setMember(member)
		}
		getMember()
	}, [memberId])

	console.log(memberId)

	return (
		<div>Member</div>
	)
}

export default Member