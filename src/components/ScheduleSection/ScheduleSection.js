import React, { useState } from 'react';
import styles from './ScheduleSection.module.css';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';

function ScheduleSection() {
  // Calendar state and data
  const month = "October 2021";
  const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  const [selected, setSelected] = useState({ day: 26, time: '09:00' });

  // Time slots for each day
  const daySlots = {
    25: ['10:00', '11:00', '12:00'],
    26: ['08:00', '09:00', '10:00'],
    27: ['12:00', '--','13:00'],
    28: ['10:00', '11:00','--'],
    29: ['--','14:00','16:00"'],
    30: ['12:00', '14:00','15:00'],
    31: ['09:00', '10:00', '11:00'],
  };

  // Appointments below calendar
  const appointments = [
    {
      time: '09:00-11:00',
      title: 'Dentist',
      doctor: 'Dr. Cameron Williamson',
      icon: '🦷',
      day: 26,
      slot: '09:00',
    },
    {
      time: '11:00-12:00',
      title: 'Physiotherapy Appointment',
      doctor: 'Dr. Kevin Djones',
      icon: '💪',
      day: 28,
      slot: '11:00',
    },
    
    
  ];

  // Upcoming schedule data
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
    <div className={styles.scheduleSection}>
      {/* Calendar Section */}
      <div className={styles.calendarView}>
        <div className={styles.calendarHeader}>
          <h3>{month}</h3>
          <div className={styles.navigation}>
            <span>←</span>
            <span>→</span>
          </div>
        </div>
        <div className={styles.daysOfWeek}>
          {daysOfWeek.map((day) => (
            <div key={day} className={styles.dayOfWeek}>{day}</div>
          ))}
        </div>
        <div className={styles.datesGrid}>
          {dates.map((date) => (
            <div key={date} className={styles.dateCell}>
              <div className={styles.dateNumber}>{date}</div>
              <div className={styles.appointmentsList}>
                {daySlots[date].map((slot, idx) => (
                  <div
                    key={slot + idx}
                    className={
                      slot === '-' ? styles.emptySlot :
                        selected.day === date && selected.time === slot
                          ? styles.selectedSlot
                          : styles.appointmentTime
                    }
                  
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.appointmentsToday}>
          {appointments.map((app, index) => (
            <div
              key={index}
              className={`${styles.appointmentCard} ${index === 0 ? styles.darkBlueCard : ''}`}
            >
              <div className={styles.appointmentDetails}>
                <div className={styles.appointmentTitle}>{app.title}</div>
                <div className={styles.appointmentIcon}>{app.icon}</div>
              </div>
              <div className={styles.appointmentTimeCard}>{app.time}</div>
              <div className={styles.appointmentDoctor}>{app.doctor}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Schedule Section */}
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
    </div>
  );
}

export default ScheduleSection; 