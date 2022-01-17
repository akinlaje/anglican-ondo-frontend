import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Pagination from '../../../components/Pagination/Pagination'
import styles from '../../../styles/AdminMembership.module.css'

const Membership = () => {
  const [members, setMembers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchedTerm, setSearchedTerm] = useState('')
  const [page, setPage] = useState(1)

  const numPerPage = 9

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

  const filteredMembers = members.map((member, i) => {
    const memberNumber = i + 1
    const pageMaxNumber = page * numPerPage
    const lastPageMaxNumber = (page - 1) * numPerPage
    return (
      lastPageMaxNumber < memberNumber &&
      memberNumber <= pageMaxNumber ? member : null
    )
  }).filter(v => v)

  return (
    <div className={styles.Container}>
      <div className={styles.Members}>
        {filteredMembers.map((member, i) => {
          const { id, imageUrl, name } = member
          return (
            <div key={i} className={styles.MemberWrapper} onClick={() => viewMember(id)}>
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
      <Pagination 
        page={page} 
        setPage={setPage} 
        numPerPage={numPerPage} 
        numItems={members.length} 
      />
    </div>
  )
}

export default Membership