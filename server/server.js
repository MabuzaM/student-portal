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

// app.route('/courses/:id').get((req, res) => {
//   const courseId = req.params.id;

//   CourseModel.findById({courseId}).then((course) => {
//     res.json(course);
//   }).catch(err => res.json(err));
// })

app.patch('/courses/:id', async (req, res) => {  
    const courseId = req.params.id;

    const newModuleData = req.body;

    try {
      const course = await CourseModel.findByIdAndUpdate(
        courseId,
        { $push: { courseModules: newModuleData } },
        { new: true }
      );

      res.status(200).send('success');
  
    } catch (err) {
      res.send('Error');
    }

});

app.patch('/courses/modules/:id', async (req, res) => {
  const courseId = req.params.id;
  const updatedModule = req.body;

  try {
    const course = await CourseModel.findByIdAndUpdate(
      courseId,
      {$set: {courseModules: updatedModule}},
      {new: true}
    );

    res.status(200).send('success');


  } catch (err) {
    res.send('Error');
  }

});

const updateCourseModules = async (courseId, newModule) => {
  try {
    const course = await CourseModel.findByIdAndUpdate(
      courseId,
      { $push: { courseModules: newModule } },
      { new: true }
    );

    console.log(course);
  } catch (err) {
    console.error(err);
  }
};

app.route('/courses/:id').put(async (req, res) => {
  const courseId = req.params.id;
  const newModules = req.body.modules;

  // try {
  //   const course = await CourseModel.findById(courseId);

  //   if (!course) {
  //     return { error: 'Course not found' };
  //   } else {
  //     course.courseModules = [...courseModules, newModules];
  //     await course.save();
  //   }
  // } catch (error) {
  //   return { error: 'Failed to update course modules' };
  // }
})

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

app.route('/students')
  .get((req, res) => {
    const searchKey = req.body.params;
    StudentModel.find({studentName: { $regex: searchKey, $options: 'i' }})
    .then((students) => {res.json(students);})
    .catch((err) => {res.json(err);});
  })
  .post((req, res) => {
    try {
      // const uniqueNumber = round(Number(req.body.nationalId) / 73).toString().slice(0, 2);
      const studentNumber = `A24${req.body.nationalId.slice(-4)}`;
      const studentData = new StudentModel({...req.body, studentNumber: studentNumber});
      studentData.save();
      res.status(201).json({ message: 'User input saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error saving student data' });
    }
  })

  app.route('/students/search')
  .get(async (req, res) => {
    const searchKey = req.query.search;
    const students = await StudentModel.find({
      $or: [
        { 
          studentName: { $regex: searchKey, $options: 'i' }
        },
        {
          nationalId: searchKey
        },
        {
          studentNumber: searchKey
        }
      ],
    });

    res.json(students);
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
