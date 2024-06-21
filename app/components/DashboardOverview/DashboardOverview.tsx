import React from "react";
import './DashboardOverview.scss';
import { Course, Employee, Student } from "@/app/utils/types";
import { AsideMenu } from "../Asidemenu/AsideMenu";
import { Card, CardGroup } from "react-bootstrap";

interface DashboardOverViewProps {
  courses: Course[],
  students: Student[],
  employees: Employee[],
  staff: Employee
}

export const DashboardOverView:  React.FC<DashboardOverViewProps> = ({courses, students, employees, staff}) => {
  const filterArray = (employeesArray: Employee[], filter: string) => {
    return employeesArray.filter(
      (employee) => employee?.employeeDepartment === filter
    ).length
  };

  return (
    <article className="DashboardOverview">
      {staff && (<AsideMenu />)}

      <div className="DashboardOverview__wrapper">
        <h2 className="DashboardOverview__title">Overview</h2>
        <CardGroup>
          <Card>
            <Card.Header>
              {students.length}
            </Card.Header>

            <Card.Body>
              <Card.Title>Students</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              {courses.length}
            </Card.Header>

            <Card.Body>
              <Card.Title>Courses</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              {
                filterArray(employees, 'Admin')
              }
            </Card.Header>

            <Card.Body>
              <Card.Title>Admin Staff</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              {
                filterArray(employees, 'Academic')
              }
            </Card.Header>

            <Card.Body>
              <Card.Title>Teachers</Card.Title>
            </Card.Body>
          </Card>

          {/* <div className="Card DashboardOverview__card">
            <p className="Card__title">Courses</p>
            <hr className="Card__line" />
            <p className="Card__info">{courses.length}</p>
          </div>

          <div className="Card DashboardOverview__card">
            <p className="Card__title">Admin Staff</p>
            <hr className="Card__line" />
            <p className="Card__info">
              {
                filterArray(employees, 'Admin')
              }
            </p>
          </div>

          <div className="Card DashboardOverview__card">
            <p className="Card__title">Educators</p>
            <hr className="Card__line" />
            <p className="Card__info">
              {
                filterArray(employees, 'Academic')
              }
            </p>
          </div> */}
        </CardGroup>

        <hr className="DashboardOverview__line"/>

        <div className="Analytics">
          <h3 className="Analytics__heading">Analytics / Metrics</h3>
        </div>
      </div>
    </article>
  )
}
