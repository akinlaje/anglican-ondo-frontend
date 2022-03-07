import { useEffect, useState } from 'react';
import styles from '../../../styles/Member.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowLeft as BackIcon } from 'react-icons/bs';
import axios from 'axios';
import { BASE_URL as apiBaseUrl } from '../../../utils';

const Member = ({ admin, authToken }) => {
  const [member, setMember] = useState({});

  const router = useRouter();

  const {
    query: { memberId },
  } = router;

  useEffect(() => {
    const getMember = async () => {
      // get member
      axios
        .post(apiBaseUrl + 'single/members', { id: memberId })
        .then(({ data: { msg } }) => {
          // console.log(msg);
          setMember(msg[0]);
        });
    };
    getMember();
  }, []);

  const {
    surname,
    lastName,
    otherNames,
    email,
    church,
    archdeaconry,
    phoneNumber,
    society,
    roles,
    birthDate,
    //weddingAnniversary,
    //baptismalDate,
    //confirmationDate,
    imageUrl,
  } = member;

  return (
    <>
      <Link href='/admin/members'>
        <a
          style={{
            display: 'inline-block',
            height: '50px',
            lineHeight: '50px',
          }}
        >
          <BackIcon height='30px' style={{ marginRight: '20px' }} />
          Back
        </a>
      </Link>
      <div className={styles.Container}>
        <div className={styles.Image}>
          {imageUrl && (
            <Image
              src={imageUrl}
              width={'250px'}
              height={'250px'}
              alt={surname + ' ' + lastName}
            />
          )}
        </div>
        <div>Name : {lastName}</div>
        <div>Phone Number : {phoneNumber}</div>
        <div>Surname : {lastName}</div>
        <div>Other Names : {otherNames}</div>
        <div>Email : {email}</div>
        <div>Archdeaconry : {archdeaconry}</div>
        <div>Church : {church}</div>
        <div>Baptismal Date: {baptismalDate}</div>
        <div>Confirmation Date: {confirmationDate}</div>
        <div>BirthDate: {birthDate}</div>
        <div>Wedding Anniversary : {weddingAnniversary}</div>
        <div>Roles : {roles}</div>
        <div>Society : {society}</div>
      </div>
    </>
  );
};

export default Member;
