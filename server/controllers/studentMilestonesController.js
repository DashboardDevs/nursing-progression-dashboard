const milestone = require('../models/studentMilestonesModel');

exports.getAllMilestonesForStudent = (req, res) => {
    milestone.getAllMilestonesForStudent(req.params.studentId, (err, data) => {
        if (err) {
            res.status(500).send({ error: "Error retrieving student milestone data" });
        } else {
            res.send(data);
        }
    })
}

exports.updateMilestoneStatus = (req, res) => {
    milestone.updateMilestoneStatus(req.params.studentId, req.params.milestoneId, (err, data) => {
        if (err) {
            res.status(500).send({ error: "Error updating milestone" });
        } else {
            res.send(data);
        }
    })
}