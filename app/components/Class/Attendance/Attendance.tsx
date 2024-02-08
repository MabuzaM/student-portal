import React from 'react';
import './Attendance.css';
import Image from 'next/image';
import attendance from '../../../assets/timetable2.png';

export const Attendance = () => {
  return (
    <section className="Attendance Class__card">
      <h3 className="Attendance__heading">Attendance</h3>

      <Image src={attendance} alt='Attendance icon' className='Attendance__icon'/>

      <table className="Attendance__table">
        <thead className="Attendance__headers">
          <th className="Attendance__heading">
            Module
          </th>

          <th className="Attendance__heading">
            Time
          </th>

          <th className="Attendance__heading">
            P/A
          </th>

        </thead>
      </table>
    </section>
  );
}
