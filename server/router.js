const express = require('express');
const router = express.Router();
const studentController = require('./controllers/studentController');
const milestoneController = require('./controllers/milestoneController');

router.get('/student/advisor/:advisorId', studentController.findByAdvisorId);
router.get('/student/:studentId', studentController.getStudentById);
router.get('/student', studentController.getAllStudents);
router.get('/milestones/:studentId', milestoneController.getMilestonesForStudent);

module.exports = router;