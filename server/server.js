const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const CourseModel = require('./models/Courses');
const AttendanceModel = require('./models/Attendances');
const StudentsModel = require('./models/Students');
const AssessmentsModel = require('./models/Assessments');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors());
app.use(express.urlencoded({extended: true})); //Middleware to handle form data
app.use(express.static('public'));

const host = 'http://127.0.0.1';
const port = 3001;

mongoose.connect("mongodb://127.0.0.1:27017/students_portal").then(() => {
  console.log('Connected to the database');
}).catch((err) => {
  console.log('Error connecting to the database', err);
});

//Routes
//Home Page Route
// app.get('/', (req, res) => {
//   res.send('Hi there');
// });

//Get all courses
app.get('/getCourses', (req, res) => {
  CourseModel.find()
    .then((courses) => {
      res.json(courses)
    })
    .catch(err => res.json(err));
});

//Get all attendance
app.get('/getAttendances', (req, res) => {
  AttendanceModel.find()
    .then((attendance) => {
      res.json(attendance)
    })
    .catch(err => res.json(err));
});

//Get all assessments
app.get('/getAssessments', (req, res) => {
  AssessmentsModel.find()
    .then((assessment) => {
      res.json(assessment)
    })
    .catch(err => res.json(err));
});

//Get a single student
app.get('/getStudent', (req, res) => {
  StudentsModel.findOne({student_id: 'ash01'})
  .then((student) => {res.json(student);})
  .catch((err) => {res.json(err);});
});

//Get all students
app.get('/getStudents', (req, res) => {
  StudentsModel.find()
  .then((students) => {res.json(students);})
  .catch((err) => {res.json(err);});
});

//POST REQUESTS TO THE DATABASE
//Save new student data
app.post('/student', async (req, res) => {
  try {
    // console.log('received form data: ', JSON.stringify(req.body));
    const student = new StudentsModel(req.body);
    await student.save();
    res.status(201).json({
      message: 'Student successfully created!!'
    });
  } catch(err) {
    console.error('Error creating student!:', err);
    res.status(400).send(err);
  }
});

app.post('/employee', (req, res) => {
  const newEmployeeDetails = req.body;
  const employeeMember = new EmployeeModel(newEmployeeDetails);
  employeeMember.save().then((employee) => {
    res.status(201).json({
      message: 'Employee details successfully saved!!',
      data: employee
    })
  }).catch((err) => {
    res.status(400).send(err);
    console.error('Error creating employee!:', err);
  })
});

//Run the server
app.listen(port, () => {
  console.log(`Server is ready and running on ${host} \nand listening on Port number: ${port}`);
});
