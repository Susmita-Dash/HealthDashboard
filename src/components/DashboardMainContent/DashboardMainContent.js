import React from 'react';
import styles from './DashboardMainContent.module.css';
import AnatomyAndActivity from '../AnatomyAndActivity/AnatomyAndActivity/AnatomyAndActivity';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';
import ScheduleSection from '../ScheduleSection/ScheduleSection';

function DashboardMainContent() {
  return (
    <div className={styles.dashboardMainContentWrapper}>
      {/* Left Column */}
      <div className={styles.leftColumn}>
        <div className={styles.anatomyAndHealthCards}>
          <AnatomyAndActivity />
          <HealthStatusCards />
        </div>
      </div>
      {/* Right Column */}
      <div className={styles.rightColumn}>
        <ScheduleSection />
      </div>
    </div>
  );
}

export default DashboardMainContent;
