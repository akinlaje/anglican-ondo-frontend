import React from 'react';
import { useRouter } from 'next/router';
import styles from './Logout.module.css';

export default function Logout() {
  const router = useRouter();

  const handleLogout = () => {
    window.localStorage.clear();
    router.reload();
  };

  return (
    <button className={styles.button} onClick={handleLogout}>
      LogOut
    </button>
  );
}
