import React from 'react';
import './Assessment.css';
import Image from 'next/image';
import assessment from '../../../assets/exam.png';

export const Assessment = () => {
  return (
    <section className="Assessment Class__card">
      <h3 className="Assessment__heading">Assessments</h3>

      <Image src={assessment} alt='Assessment icon' className='Assessment__icon'/>

      <h4 className="Assessment__tableheading">ICAS</h4>
      
      <table className="Assessment__table">
        
        <thead className="Assessment__headers">
          <th className="Assessment__heading Assessment__table--col">
            Module Code
          </th>

          <th className="Assessment__heading Assessment__table--col">
            DP1
          </th>

          <th className="Assessment__heading Assessment__table--col">
            DP2
          </th>

          <th className="Assessment__heading Assessment__table--col">
            DP3
          </th>

          <th className="Assessment__heading Assessment__table--col">
            Exam
          </th>
        </thead>

        <tbody>
          <td className="Assessment__table--col">
            <tr className="Assessment__table--row">SysDev</tr>
            <tr className="Assessment__table--row">TechSup</tr>
            <tr className="Assessment__table--row">GraphD</tr>
            <tr className="Assessment__table--row">OSHM</tr>
          </td>

          <td className="Assessment__table--col">
            <tr className="Assessment__table--row">A</tr>
            <tr className="Assessment__table--row">78</tr>
            <tr className="Assessment__table--row">67</tr>
            <tr className="Assessment__table--row">50</tr>
          </td>

          <td className="Assessment__table--col">
            <tr className="Assessment__table--row">A</tr>
            <tr className="Assessment__table--row">78</tr>
            <tr className="Assessment__table--row">67</tr>
            <tr className="Assessment__table--row">50</tr>
          </td>

          <td className="Assessment__table--col">
            <tr className="Assessment__table--row">A</tr>
            <tr className="Assessment__table--row">78</tr>
            <tr className="Assessment__table--row">67</tr>
            <tr className="Assessment__table--row">50</tr>
          </td>

          <td className="Assessment__table--col">
            <tr className="Assessment__table--row">A</tr>
            <tr className="Assessment__table--row">78</tr>
            <tr className="Assessment__table--row">67</tr>
            <tr className="Assessment__table--row">50</tr>
          </td>
        </tbody>
      </table>

      <div className="Assessment__exam">
        Final Exam

        <p className="Assessment__text">
        Your results are suspended due to non-payment of fees
        OR
        Unavailable Yet
        OR
        Available
        (Click the link below to download)
        </p>

        <p className="Assessment__text">
          <a href="#" className="Assessment__link">Download Your Final Results</a>
        </p>
      </div>

    </section>
  );
}
