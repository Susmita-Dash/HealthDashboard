import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import DashboardMainContent from '../DashboardMainContent/DashboardMainContent';
import styles from './App.module.css';

function App() {
  return (
    
      <div className={styles.cardWrapper}>
        <Header />
        <div className={styles.contentArea}>
          <Sidebar />
          <DashboardMainContent />
        </div>
      </div>
    
  );
}

export default App;

