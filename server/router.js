const express = require('express');
const router = express.Router();
const studentController = require('./controllers/studentController');
const milestoneController = require('./controllers/milestoneController');
const userController = require('./controllers/userController');

router.get('/student/advisor/:advisorId', studentController.findByAdvisorId);
router.get('/student/:studentId', studentController.getStudentById);
router.get('/student', studentController.getAllStudents);
router.get('/milestones/:studentId', milestoneController.getMilestonesForStudent);
router.put('/milestones/update', milestoneController.updateMilestone);
router.get('/milestones/reviews/:advisorId', milestoneController.getMilestonesForReviewForAdvisor);
router.get('/login', userController.getAccountDetails);

module.exports = router;