import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../../../styles/AdminMembership.module.css'

const Membership = () => {
  const [members, setMembers] = useState([])

  const router = useRouter()

  useEffect(() => {
    const getMembers = async () => {
      // get members from  backend
      const members = [
        {
          id: '1',
          imageUrl: '/images/SA.png',
          name: 'First Member'
        },
        {
          id: '2',
          imageUrl: '/images/SA.png',
          name: 'Second Member'
        },
        {
          id: '3',
          imageUrl: '/images/SA.png',
          name: 'Third Member'
        },
      ]
      setMembers(members)
    }

    getMembers()
  }, [])

  const viewMember = (id) => router.push('/admin/members/' + id)

  return (
    <div className={styles.Container}>
      {members.map(member => {
        const { id, imageUrl, name } = member
        console.log(id)
        return (
          <div key={id} className={styles.MemberWrapper} onClick={() => viewMember(id)}>
            <div className={styles.Member}>
              <div className={styles.ImageWrapper}>
                <Image src={imageUrl} layout='fill' objectFit='contain' alt={name} />
              </div>
              <h3>{name}</h3>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Membership