import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.logo}><span style={{color: '#33c5ed', fontWeight: 'bold', fontSize: '20px'}}>Health</span><span style={{color: '#361e8f', fontWeight: 'bold', fontSize: '20px'}}>care.</span></div>
        <div className={styles.searchBar}>
          <i className="fa-solid fa-magnifying-glass" style={{color: 'black'}} ></i> <span style={{color: 'gray'}}>Search</span>
        </div>
      </div>
      <span className={styles.bellIcon}><i className="fa-solid fa-bell"></i></span>
      <div className={styles.rightIcons}>
        <span><button className={styles.profileButton}><i className="fa-solid fa-user"></i></button></span>
        <span><button className={styles.addButton}><i className="fa-solid fa-plus"></i></button></span>
      </div>
    </header>
  );
}

export default Header;
