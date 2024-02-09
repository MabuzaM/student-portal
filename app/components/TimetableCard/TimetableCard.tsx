import React from 'react';
import './TimetableCard.scss';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const TimetableCard = () => {
  return (
   <article className="Card">
      <h2 className="Card_title">Timetable</h2>

      <div className="Card_image">image</div>

      <table className="Table Card_table">
        <thead className="Table_header">
          <th className="Table_head Table_head--lesson">Lsn</th>
          <th  className="Table_head Table_head--day">M</th>
          <th  className="Table_head Table_head--day">T</th>
          <th  className="Table_head Table_head--day">W</th>
          <th  className="Table_head Table_head--day">T</th>
          <th  className="Table_head Table_head--day">F</th>
          <th  className="Table_head Table_head--day">S</th>
        </thead>
        <tbody className="Table_body">
          <tr className="Table_row">
            <td className="Table_data"> <span  className="Table_row--period"> 1 </span><br /> 0800 </td>
            <td className="Table_data"> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td className="Table_data"> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td className="Table_data"> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td className="Table_data"> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td className="Table_data"> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td className="Table_data"> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
          </tr>

          <tr className="Table_row">
            <td> <span  className="Table_row--period"> 2 </span><br /> 0900 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
          </tr>

          <tr className="Table_row">
            <td> <span  className="Table_row--period"> 3 </span><br /> 1000 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
          </tr>

          <tr className="Table_row">
            <td> <span  className="Table_row--period"> 4 </span><br /> 1100 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
          </tr>

          <tr className="Table_row">
            <td> <span  className="Table_row--period"> 5 </span><br /> 1200 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
          </tr>

          <tr className="Table_row">
            <td> <span  className="Table_row--period"> 6 </span><br /> 1300 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
          </tr>

          <tr className="Table_row">
            <td> <span  className="Table_row--period"> 7 </span><br /> 1400 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
          </tr>

          <tr className="Table_row">
            <td> <span  className="Table_row--period"> 8 </span><br /> 1500 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
          </tr>

          <tr className="Table_row">
            <td> <span  className="Table_row--period"> 9 </span><br /> 1600 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
            <td> <span  className="Table_row--subject"> Sub1 </span> <br /> H03 </td>
          </tr>
        </tbody>
      </table>

      

      <button className="Card_button">Download</button>
   </article>
  );
};
