const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  subject: String,
  time: String,
  attendance: String,
});

const AttendanceModel = new mongoose.model("attendance", AttendanceSchema);
module.exports = AttendanceModel;
