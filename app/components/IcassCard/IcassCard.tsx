import React from 'react';
import './IcassCard.scss';
import Image from 'next/image';
 import exam from './assets/exams.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const IcassCard = () => {
  return (
   <article className="Card IcassCard">
      <h2 className="Card_title">Assessments</h2>

      <div className="Card_image">
        <Image src={exam} alt='icass icon' width={150} />
      </div>

      <div className="Icass">
        <h2 className="Icass_title">Icass</h2>

        <table className="Icass_table">
          <thead className="Icass_table-header">
            <th  className="Icass_table-head">Module</th>
            <th  className="Icass_table-head">dp1</th>
            <th  className="Icass_table-head">dp2</th>
            <th  className="Icass_table-head">dp3</th>
          </thead>

          <tbody className="Icass_table-body">
            <tr className="Icass_table-row">
              <td className="Icass_data Icass_data--module"> Module1 </td>
              <td className="Icass_data Icass_data--fail"> A </td>
              <td className="Icass_data Icass_data--fail"> 0 </td>
              <td className="Icass_data Icass_data--fail"> 0 </td>
            </tr>

            <tr className="Icass_table-row">
              <td className="Icass_data Icass_data--module"> Module2 </td>
              <td className="Icass_data Icass_data--pass"> 76 </td>
              <td className="Icass_data Icass_data--fail"> 0 </td>
              <td className="Icass_data Icass_data--fail"> 0 </td>
            </tr>

            <tr className="Icass_table-row">
              <td className="Icass_data Icass_data--module"> Module3 </td>
              <td className="Icass_data Icass_data--fail"> 39 </td>
              <td className="Icass_data Icass_data--fail"> 0 </td>
              <td className="Icass_data Icass_data--fail"> 0 </td>
            </tr>

            <tr className="Icass_table-row">
              <td className="Icass_data Icass_data--module"> Module4 </td>
              <td className="Icass_data Icass_data--pass"> 76 </td>
              <td className="Icass_data Icass_data--fail"> 0 </td>
              <td className="Icass_data Icass_data--fail"> 0 </td>
            </tr>
          </tbody>
        </table>

        <p className="Icass_link">Download ICASS results</p>
      </div>

      
      <div className="Exam">
        <h2 className="Exam_title">Final Exams</h2>

        <p>Your results are suspended due to non-payment of fees</p>

        <p>OR</p>

        <p>Unavailable Yet</p>

        <p>OR</p>

        <p>Available (Click the link below to download)</p>       

        <p className="Exam_link">Download Your final results</p>
      </div>   

      <button className="Card_button">Download</button>
   </article>
  );
};
