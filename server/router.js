const express = require('express');
const router = express.Router();
const studentController = require('./controllers/studentController');
const studentMilestonesController = require('./controllers/studentMilestonesController');

router.get('/student/advisor/:advisorId', studentController.findByAdvisorId);
router.get('/student', studentController.getAllStudents);

router.get('/student/:studentId/milestones', studentMilestonesController.getAllMilestonesForStudent);

router.get('/student/:studentId/update/milestones/:milestoneId',studentMilestonesController.updateMilestoneStatus);

module.exports = router;