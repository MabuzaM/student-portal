const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CourseModel = require('./models/Course');

const app = express();
app.use(cors());
app.use(express.json());

const host = 'http://localhost';
const port = 3001;

mongoose.connect("mongodb://127.0.0.1:27017/students_portal");

//Routes
app.get('/courses', (req, res) => {
  CourseModel.find()
    .then(courses => res.json(courses))
    .catch(err => res.json(err));
});

app.listen(port, () => {
  console.log(`Server is ready and running running on ${host} \nand listening on Port number: ${port}`);
});



// app = express();
// const host = 'http://localhost';
// const port = 3001;
// app.use(require("./routes/record"));

// const dbo = require("./db/con"); //get driver connection

// app.listen(port, () => {
//   //perform db connection when server starts
//   dbo.connectToServer((err) => {
//     if (err) {
//       console.error(err);
//     }
//   })
//   console.log(`Server is ready and running running on ${host} \nand listening on Port number: ${port}`)
// });
