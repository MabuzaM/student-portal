import React, { useEffect, useState } from "react";
import './Students.scss';
import { Employee, Student } from "@/app/utils/types";
import axios from 'axios';
import ky  from 'ky';
import { AsideMenu } from "../Asidemenu/AsideMenu";

interface StudentsProps {
  staff: Employee
}

export const Students: React.FC<StudentsProps> = ({staff}) => {
  const [searchKey, setSearchKey] = useState('');
  const [currentStudents, setCurrentStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = axios.get(`http://127.0.0.1:5000/students/search?search=${searchKey}`);
      const students = (await response).data;
      setCurrentStudents(students);
    };

    fetchStudents();
  }, [searchKey])

  const handleInputChange = (e) => {
    setSearchKey(e.target.value.replace(/[^a-zA-Z0-9\s]/g, ""));
  }

  return (
    <article className="Students">
      {staff && (<AsideMenu />)}

      <div className="Students__wrapper">
        <form className="Students__form">
          <input
            type="search"
            name="studentId"
            id="studentId"
            className="Students__input"
            placeholder="Type ID Number or Name or Student Number to Search"
            value={searchKey}
            onChange={handleInputChange}
          />
          <button type="button" className="Students__button" onClick={() => {}} hidden>Search</button>
        </form>

        <div className="Students__info">
          <table className="Table Students__profile">
            <thead className="Table__header">
              <tr className="Table__row">
                <th className="Table__column">Name</th>
                <th className="Table__column">Date Of Birth</th>
                <th className="Table__column">ID Number</th>
                <th className="Table__column">Student Number</th>
                <th className="Table__column">Course</th>
                <th className="Table__column">Parent Name</th>
                <th className="Table__column">Phone Number</th>
                <th className="Table__column">Email Address</th>
              </tr>
            </thead>

            <tbody className="Table__body">
              {currentStudents.map((currentStudent) => {
                const {
                  nationalId,
                  studentName,
                  studentNumber,
                  surname,
                  dateOfBirth,
                  courseName,
                  parentEmail,
                  parentPhone,
                  parentSurname,
                  parentName
                } = currentStudent;
                return (
                  searchKey &&
                    <tr className="Table__row" key={nationalId}>
                      <td className="Table__data">{`${studentName || ''} ${surname || ''}`}</td>
                      <td className="Table__data">{`${dateOfBirth || ''}`}</td>
                      <td className="Table__data">{nationalId}</td>
                      <td className="Table__data">{studentNumber}</td>
                      <td className="Table__data">{courseName}</td>
                      <td className="Table__data">{`${parentName || ''} ${parentSurname || ''}`}</td>
                      <td className="Table__data">{parentPhone}</td>
                      <td className="Table__data">{parentEmail}</td>
                    </tr>
                )
              })}
            </tbody>
          </table>

          <table className="Table Students__attendance">
            

          </table>

          <table className="Students__performance">

          </table>

          <table className="Students__assessments">

          </table>

          <table className="Students__fees">

          </table>

        </div>
      </div>
    </article>
  );
}
