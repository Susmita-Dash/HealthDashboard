import React from 'react';
import styles from './DashboardOverview.module.css';
import AnatomySection from '../AnatomySection/AnatomySection';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';

function DashboardOverview() {
  return (
    <div className={styles.dashboardOverview}>
      <AnatomySection />
      <HealthStatusCards />
    </div>
  );
}

export default DashboardOverview;
