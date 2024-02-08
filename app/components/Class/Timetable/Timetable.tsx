import React from 'react';
import './Timetable.css';
import Image from 'next/image';
import timetable from '../../../assets/timetable.jpg';
import { Button } from '../../Button/Button';

export const Timetable = () => {
  return (
    <section className="Timetable Class__card">
      <h3 className="Timetable__heading">Timetable</h3>

      <Image src={timetable} alt='Timetable icon' className='Timetable__icon'/>

      <table className="timetable__table">
        <thead className="Timetable__headers">
          <th className="Timetable__heading">
            M
          </th>

          <th className="Timetable__heading">
            T
          </th>

          <th className="Timetable__heading">
            W
          </th>

          <th className="Timetable__heading">
            T
          </th>

          <th className="Timetable__heading">
            F
          </th>
        </thead>
      </table>

      <Button />
    </section>
  );
}
