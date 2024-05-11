import React from "react";
import './DashboardOverview.scss';
import { Employee } from "@/app/utils/types";

export const DashboardOverView = ({courses = [], students = [], employees = []}) => {
  const filterArray = (employeesArray: Employee[], filter: string) => {
    return employeesArray.filter(
      (employee) => employee?.employeeDepartment === filter
    ).length
  };

  return (
    <article className="DashboardOverview">
      <div className="Card__group">
        <div className="Card DashboardOverview__card">
          <p className="Card__title">Students</p>
          <hr className="Card__line" />
          <p className="Card__info">{students.length}</p>
        </div>

        <div className="Card DashboardOverview__card">
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
        </div>
      </div>

      <hr className="DashboardOverview__line"/>

      <div className="Analytics">
        <h3 className="Analytics__heading">Analytics / Metrics</h3>
      </div>
    </article>
  )
}
