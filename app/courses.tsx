import axios from "axios";
import React, { useEffect, useState } from "react";
import { Course } from "./utils/types";

export const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/getCourses')
    .then((courses) => {
      setCourses(courses.data);
    })
    .catch((err: any) => {
      console.log(err);
    })
  }, []);



  return (
    courses
  );
}
