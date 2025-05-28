import React from 'react';
import styles from './SimpleAppointmentCard.module.css';

function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className={styles.simpleAppointmentCard}>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardTime}>{time}</div>
      </div>
      <div className={styles.cardIcon}>{icon}</div>
    </div>
  );
}

export default SimpleAppointmentCard;

