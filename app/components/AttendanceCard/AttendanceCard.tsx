import React from 'react';
import './AttendanceCard.scss';
import { todayDate } from '../../helperFunctions.js';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

export const AttendanceCard = () => {
  return (
   <article className="Card AttendanceCard">
      <h2 className="Card_title">Class Attendance</h2>

      <div className="Card_image">image</div>

      <h2 className="AttendanceCard_title">{todayDate}</h2>

      <table className="AttendanceCard_table">
        <thead className="AttendanceCard_table-header">
          <th  className="AttendanceCard_table-head">Module</th>
          <th  className="AttendanceCard_table-head">Time</th>
          <th  className="AttendanceCard_table-head">P/A</th>
        </thead>

        <tbody className="AttendanceCard_table-body">
          <tr className="AttendanceCard_table-row">
            <td className="AttendanceCard_table-data"> Module1 </td>
            <td className="AttendanceCard_table-data"> 1300 </td>
            <td className="AttendanceCard_table-data AttendanceCard_table-data--present"> P </td>
          </tr>

          <tr className="AttendanceCard_table-row">
            <td className="AttendanceCard_table-data"> Module1 </td>
            <td className="AttendanceCard_table-data"> 1400 </td>
            <td className="AttendanceCard_table-data AttendanceCard_table-data--present"> P </td>
          </tr>

          <tr className="AttendanceCard_table-row">
            <td className="AttendanceCard_table-data"> Module1 </td>
            <td className="AttendanceCard_table-data"> 1500 </td>
            <td className="AttendanceCard_table-data AttendanceCard_table-data--absent"> A </td>
          </tr>
        </tbody>
      </table>

      <p className="AttendanceCard_link">Download Weekly Attendance Summary</p>
      <p className="AttendanceCard_link">Download Monthly Attendance Summary</p>
      <p className="AttendanceCard_link">Download Termly/Semester Attendance Summary</p>

    <button className="Card_button">Download</button>
   </article>
  );
};
