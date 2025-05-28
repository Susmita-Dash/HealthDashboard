import React from 'react';
import styles from './AnatomyAndActivity.module.css';
import anatomyImage from '../../../assets/humanFleshBg.png';

function AnatomyAndActivity() {
  // Activity feed data
  const activityData = [
    { day: 'Mon', height: '30px' },
    { day: 'Tues', height: '60px' },
    { day: 'Wed', height: '40px' },
    { day: 'Thurs', height: '80px' },
    { day: 'Fri', height: '50px' },
    { day: 'Sat', height: '70px' },
    { day: 'Sun', height: '90px' },
  ];

  return (
    <div className={styles.container}>
      {/* Anatomy Section */}
      <div className={styles.anatomySection}>
        
        <img src={anatomyImage} alt="Human Anatomy" className={styles.anatomyImage} />
          <div className={`${styles.indicator} ${styles.healthyHeart}`}> ❤️ Healthy Heart</div>
          <div className={`${styles.indicator} ${styles.healthyLeg}`}>🦵 Healthy Leg </div>
      </div>

      {/* Activity Feed Section */}
      <div className={styles.activityFeed}>
        <div className={styles.headerRow}>
          <h3>Activity</h3>
          <div className={styles.appointmentSummary}>3 appointment on this week</div>
        </div>
        <div className={styles.barChart}>
          {activityData.map((dayData, index) => (
            <div key={index} className={styles.barContainer}>
              <div
                className={styles.bar}
                style={{ height: dayData.height }}
              ></div>
              <div className={styles.dayLabel}>{dayData.day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnatomyAndActivity; 