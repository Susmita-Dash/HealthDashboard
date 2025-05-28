import React from 'react';
import styles from './HealthStatusCards.module.css';

function HealthStatusCards() {
  // Static data for the cards
  const cardsData = [
    { label: 'Lungs', date: '26 Okt 2021', status: 'bad' },
    { label: 'Teeth', date: '26 Okt 2021', status: 'good' },
    { label: 'Bone', date: '26 Okt 2021', status: 'minor' },
  ];

  // Helper to get icon based on label (simple example)
  const getIcon = (label) => {
    switch (label) {
      case 'Lungs': return '🫁';
      case 'Teeth': return '🦷';
      case 'Bone': return '🦴'; 
      default: return '';
    }
  };

  return (
    <div className={styles.healthStatusCards}>
      {cardsData.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>{getIcon(card.label)}</span>
            <span className={styles.cardLabel}>{card.label}</span>
          </div>
          <div className={styles.cardDate}>Date: {card.date}</div>
          <div className={styles.statusBar}>
            <div className={`${styles.statusBarInner} ${styles[card.status]}`}></div>
          </div>
        </div>
      ))}
      <div className={styles.detailsLink}>Details →</div>
    </div>
  );
}

export default HealthStatusCards;

