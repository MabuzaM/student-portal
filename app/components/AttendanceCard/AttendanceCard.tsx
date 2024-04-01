import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './AttendanceCard.scss';
//import attendance from './assets/attendace.png';
//import { todayDate } from '../../helperFunctions.js';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios';
import { Attendance } from '@/app/utils/types';

export const AttendanceCard = () => {
  const [attendance, setAttendance] = useState<Attendance[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/getAttendances')
      .then((attendance) => {
        setAttendance(attendance.data)
    })
    .catch((err) => {console.log(err);})
  }, [])
  return (
   <article className="Card AttendanceCard">
      <h2 className="Card_title">Class Attendance</h2>

      <div className="Card_image">
        Image
      </div>

      <h2 className="AttendanceCard_title"></h2>

      <table className="AttendanceCard_table">
        <thead className="AttendanceCard_table-header">
          <tr>
            <th  className="AttendanceCard_table-head">Module</th>
            <th  className="AttendanceCard_table-head">Time</th>
            <th  className="AttendanceCard_table-head">P/A</th>
          </tr>
        </thead>

        <tbody className="AttendanceCard_table-body">
          {
            attendance?.map((moduleRow: any) => {
              return (
                <tr className="AttendanceCard_table-row" key={moduleRow.subject}>
                  <td className="AttendanceCard_table-data">{moduleRow.subject}</td>
                  <td className="AttendanceCard_table-data">{moduleRow.time}</td>
                  <td className="AttendanceCard_table-data AttendanceCard_table-data--present">{moduleRow.attendance}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <p className="AttendanceCard_link">Download Weekly Attendance Summary</p>
      <p className="AttendanceCard_link">Download Monthly Attendance Summary</p>
      <p className="AttendanceCard_link">Download Termly/Semester Attendance Summary</p>

    <button className="Card_button">Download</button>
   </article>
  );
};
