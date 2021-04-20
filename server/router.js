const express = require('express');
const router = express.Router();
const studentController = require('./controllers/studentController');
const milestoneController = require('./controllers/milestoneController');
const userController = require('./controllers/userController');
const notesController = require('./controllers/notesController');
const advisorController = require('./controllers/advisorController');
const { removeCommitteeMember } = require('./models/advisorModel');

router.get('/student/advisor/:advisorId', studentController.findByAdvisorId);
router.get('/student/:studentId', studentController.getStudentById);
router.get('/student/committee/:studentId',advisorController.getCommitteeForStudent);
router.get('/student', studentController.getAllStudents);
router.get('/notes/:studentId', notesController.getNotesForStudent);
router.get('/student/milestones/:studentId', milestoneController.getRedMilestonesStudent);
router.get('/milestones/:studentId', milestoneController.getMilestonesForStudent);
router.put('/milestones/update', milestoneController.updateMilestone);
router.get('/milestones/reviews/:advisorId', milestoneController.getMilestonesForReviewForAdvisor);
router.get('/milestones',milestoneController.getAllMilestones);
router.get('/advisor/committee/:advisorId', advisorController.getCommitteesForAdvisor);
router.get('/advisor', advisorController.getAllAdvisors);
router.put('/committee',advisorController.addCommitteeMember);
router.delete('/committee',advisorController.removeCommitteeMember);
router.get('/login', userController.getAccountDetails);
router.put('/notes', notesController.addNote);
router.delete('/notes', notesController.deleteNote);


module.exports = router;