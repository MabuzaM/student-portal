const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const CourseModel = require('./models/Courses');
const ModuleModel = require('./models/Modules');
const AttendanceModel = require('./models/Attendances');
const StudentModel = require('./models/Students');
const AssessmentsModel = require('./models/Assessments');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const host = 'http://127.0.0.1';
const port = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/students_portal").then(() => {
  console.log('Connected to the database');
}).catch((err) => {
  console.log('Error connecting to the database', err);
});

app.route('/courses').get((req, res) => {
  CourseModel.find()
    .then((courses) => {
      res.json(courses)
    })
    .catch(err => res.json(err));
})
.post((req, res) => {
  try {
    const courseData = new CourseModel(req.body);
    courseData.save();
    res.status(201).json({ message: 'Course successfully saved' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving course data' });
  }
})
.put((req, res) => {  
  try {
    const moduleData = new ModuleModel(req.body);
    moduleData.save();
    res.status(201).json({message: 'Module Successfully saved'});
  } catch (error) {
    res.status(500).json({ error: 'Error saving module data' });
  }
});

//Get all employees
app.route('/employees').get((req, res) => {
  EmployeeModel.find()
    .then((employees) => {
      res.json(employees)
    })
    .catch(err => res.json(err));
})

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

app.get('/getStudent', (req, res) => {
  StudentModel.findOne({student_id: 'ash01'})
  .then((student) => {res.json(student);})
  .catch((err) => {res.json(err);});
});

app.route('/student')
  .get((req, res) => {
    StudentModel.find()
    .then((students) => {res.json(students);})
    .catch((err) => {res.json(err);});
  })
  .post((req, res) => {
    try {
      const uniqueNumber = round(parseInt(req.body.nationalId) / 73).toString().slice(0, 2);
      const studentNumber = `A24${req.body.nationalId.slice(-4)}${uniqueNumber}`;
      const studentData = new StudentModel({...req.body, studentNumber: studentNumber});
      studentData.save();
      res.status(201).json({ message: 'User input saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error saving student data' });
    }
  })

app.route('/employee').post((req, res) => {
  try {
    const employeeMember = new EmployeeModel(req.body);
    employeeMember.save();
    res.status(201).json({
      message: 'Employee details successfully saved!!'
    })
  } catch (error) {
    res.status(500).json({ error: 'Error saving employee data' });
  }
  })

app.listen(port, () => {
  console.log(`Server is ready and running on ${host} \nand listening on Port number: ${port}`);
});
