import React, { useEffect, useState } from 'react';
import './ModulesCard.scss';
import Image from 'next/image';
import modulesIcon from './assets/modules-transparent.png';
import axios from 'axios';

export const ModulesCard = () => {
  const [courses, setCourses] = useState([]);

  useEffect (() => {
    axios.get('http://127.0.0.1:3001/getCourses')
    .then((courses) => {
      setCourses(courses.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
   <article className="Card">
      <h2 className="Card_title">Modules</h2>

      <div className="Card_image">
        <Image src={modulesIcon} alt='modules icon' width={150}/>
      </div>

      {
          courses.map((course: Object) => (
            course.courseModules.map((courseModule: { moduleName: string; moduleInstructor: string; moduleTutor: string; }, index: React.Key) => {
              return (
                <div className="Module" key={index}>
                  <h5 className="Module_name">{courseModule.moduleName}</h5>
  
                  <div className="Module_info">
                    <p className="Module_info--label">Hod:</p>
                    <p className="Module_info--name">{course.courseManager}</p>
                  </div>
  
                  <div className="Module_info">
                    <p className="Module_info--label">Lecturer:</p>
                    <p className="Module_info--name">{courseModule.moduleInstructor}</p>
                  </div>
  
                  <div className="Module_info">
                    <p className="Module_info--label">Tutor:</p>
                    <p className="Module_info--name">{courseModule.moduleTutor}</p>
                  </div>
  
                  <hr className="Module_line" />
                </div>
            )

            })        
        
          ))

          }
      <button className="Card_button">Learn</button>
   </article>
  );
};
