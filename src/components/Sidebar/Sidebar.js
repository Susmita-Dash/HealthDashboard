import React from 'react';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.mainContent}>
        <h6 style={{color:"gray",marginTop:"10px"}}>General</h6>
        <ul>
          <li className={styles.dashboardLink}><i className="fa-solid fa-house"></i> Dashboard</li>
          <li><i className="fa-solid fa-history"></i> History</li>
          <li><i className="fa-solid fa-calendar-days"></i> Calendar</li>
          <li><i className="fa-solid fa-calendar-check"></i> Appointments</li>
          <li><i className="fa-solid fa-chart-line"></i> Statistics</li>        
        </ul>
        <h6 style={{color:"gray",marginTop:"10px"}}>Tools</h6>
        <ul>
          <li><i className="fa-solid fa-comment-dots"></i> Chat</li>
          <li><i className="fa-solid fa-circle-info"></i> Support</li>
        </ul>
      </div>
      <div className={styles.bottomNav} style={{ marginBottom: '90px' }}>
        <ul>
          <li><i className="fa-solid fa-gear"></i> Setting</li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
