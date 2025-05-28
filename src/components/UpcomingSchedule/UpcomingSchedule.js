import React from 'react';
import styles from './UpcomingSchedule.module.css';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';

function UpcomingSchedule() {
  // Static data for upcoming appointments
  const scheduleData = [
    {
      day: 'Thursday',
      appointments: [
        { title: 'Health checkup complete', time: '11:00 AM', icon: '💉' },
        { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' },
      ],
    },
    {
      day: 'Saturday',
      appointments: [
        { title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
        { title: 'Neurologist', time: '16:00 PM', icon: '🧑🏻‍⚕️' },
      ],
    },
  ];

  return (
    <div className={styles.upcomingSchedule}>
      <h4>The Upcoming Schedule</h4>
      {scheduleData.map((daySchedule, index) => (
        <div key={index} className={styles.daySchedule}>
          <h5>On {daySchedule.day}</h5>
          <div className={styles.appointmentsList}>
            {daySchedule.appointments.map((appointment, appIndex) => (
              <SimpleAppointmentCard
                key={appIndex}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;

