const student = require('../models/studentModel');

exports.getAllStudents = (req, res) => {
    student.getAllStudents((err, data) => {
        if (err) {
            res.status(500).send({ error: "Error retrieving student data" });
        } else {
            res.send(data);
        }
    })
}

exports.findByAdvisorId = (req, res) => {
    student.findByAdvisorId(req.params.advisorId, (err, data) => {
        if (err) {
            res.status(500).send({ error: "Error retrieving student data" });
        } else {
            res.send(data);
        }
    })
}
