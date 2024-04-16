import React, { useEffect, useState } from 'react';
import './IcassCard.scss';
import Image from 'next/image';
 import exam from './assets/exams.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios';
import { Assessment } from '@/app/utils/types';
import { changeMarkColor } from '@/app/utils/handlerFunctions';

export const IcassCard = () => {
  const [assessments, setAssessments] = useState<Assessment[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getAssessments')
      .then((assessment) => (
        setAssessments(assessment.data)
      ))
      .catch((err) => {
        console.log(err);
      })
  }, [])
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
            <tr>
              <th  className="Icass_table-head">Module</th>
              <th  className="Icass_table-head">Assignment</th>
              <th  className="Icass_table-head">Test</th>
              <th  className="Icass_table-head">Internal Exam</th>
            </tr>
          </thead>

          <tbody className="Icass_table-body">
            {
              assessments.map((assessment) => {
                const { module, test, assignment, internal_exam } = assessment;

                return(
                  <tr className="Icass_table-row" key={module}>
                    <td className="Icass_data Icass_data--module"> {module} </td>

                    <td
                      className="Icass_data"
                      style={{ color: changeMarkColor(assignment) }}
                    > {assignment} </td>

                    <td
                      className="Icass_data"
                      style={{ color: changeMarkColor(test) }}
                    > {test} </td>

                    <td
                      className="Icass_data"
                      style={{ color: changeMarkColor(internal_exam) }}
                    > {internal_exam} </td>
                  </tr>
                )
              })
            }
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
