import React, { useEffect, useState } from 'react';
import './TimetableCard.scss';
import Image from 'next/image';
import timetable from './assets/timetable.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Course, Timetable } from '@/app/utils/types';
import axios from 'axios';

export const TimetableCard = () => {
  const [courses, setCourses] = useState<Course[]>([]);
 // const [courseTimetable, setCourseTimetable] = useState<Timetable[]>([]);

  useEffect(()=> {
    axios.get('http://localhost:3001/getCourses').then((courses) => {
      setCourses(courses.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (
   <article className="Card">
      <h2 className="Card_title">Timetable</h2>

      <div className="Card_image">
        <Image src={timetable} alt='timetable icon' width={150}/>      
      </div>

      <table border={1}>
        <tbody>
          {
            courses.map((course) => (
              course.courseTimetable.map((timetableDetails) => {
                console.log(timetableDetails);

                return(
                  <tr key={timetableDetails.day}>
                    <td>
                      {timetableDetails.day}
                    </td>
                    {
                      timetableDetails.lessons.map((lesson) => {
                        const { 
                          lesson_number,
                          lesson_time,
                          subject,
                          classroom,
                          teacher
                        } = lesson;
                        return(
                          <td key={lesson_number + subject}>
                            <h6>{lesson_time}</h6>
                            <h5>{subject}</h5>
                            <h6>{classroom}</h6>
                            <h6>{teacher}</h6>
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            ))
          }
        </tbody>
      </table>

      {/* <table className="Table Card_table">
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
      </table> */}

      

      <button className="Card_button">Download</button>
   </article>
  );
};
