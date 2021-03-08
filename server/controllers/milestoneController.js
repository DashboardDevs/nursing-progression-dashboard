const milestone = require('../models/milestoneModel');

exports.getMilestonesForStudent = (req, res) => {
    milestone.getMilestonesForStudent(req.params.studentId, (err, data) => {
        if (err) {
            res.status(500).send({ error: "Error retrieving student data" });
        } else {
            res.send(data);
        }
    })
}
