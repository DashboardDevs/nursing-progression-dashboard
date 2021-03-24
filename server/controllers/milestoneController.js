const milestone = require('../models/milestoneModel');

exports.getMilestonesForStudent = (req, res) => {
    milestone.Milestone.getMilestonesForStudent(req.params.studentId, (err, data) => {
        if (err) {
            res.status(500).send({ error: "Error retrieving milestone data" });
        } else {
            res.send(data);
        }
    })
}

exports.getMilestonesForReviewForAdvisor = (req, res) => {
    milestone.MilestoneReview.getMilestonesForReviewForAdvisor(req.params.advisorId, (err, data) => {
        if (err) {
            res.status(500).send({ error: "Error retrieving milestone data" });
        } else {
            res.send(data);
        }
    })
}
