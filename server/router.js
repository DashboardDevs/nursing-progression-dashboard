const express = require('express');
const router = express.Router();
const studentController = require('./controllers/studentController');
const userController = require('./controllers/userController');

router.get('/student/advisor/:advisorId', studentController.findByAdvisorId);
router.get('/student', studentController.getAllStudents);
router.get('/login', userController.getAccountDetails);

module.exports = router;