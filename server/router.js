const express = require('express');
const router = express.Router();
const studentController = require('./controllers/studentController');

router.get('/student/advisor/:advisorId', studentController.findByAdvisorId);
router.get('/student', studentController.getAllStudents);

module.exports = router;