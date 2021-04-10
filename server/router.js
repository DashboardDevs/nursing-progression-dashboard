const express = require('express');
const router = express.Router();
const studentController = require('./controllers/studentController');
const milestoneController = require('./controllers/milestoneController');
const userController = require('./controllers/userController');
const notesController = require('./controllers/notesController');

router.get('/student/advisor/:advisorId', studentController.findByAdvisorId);
router.get('/student/:studentId', studentController.getStudentById);
router.get('/student', studentController.getAllStudents);
router.get('/notes/:studentId', notesController.getNotesForStudent);
router.get('/student/milestones/:studentId', milestoneController.getRedMilestonesStudent);
router.get('/milestones/:studentId', milestoneController.getMilestonesForStudent);
router.put('/milestones/update', milestoneController.updateMilestone);
router.get('/milestones/reviews/:advisorId', milestoneController.getMilestonesForReviewForAdvisor);
router.get('/milestones',milestoneController.getAllMilestones);
router.get('/login', userController.getAccountDetails);
router.put('/notes', notesController.addNote);
router.delete('/notes', notesController.deleteNote);


module.exports = router;