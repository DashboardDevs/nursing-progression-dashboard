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

exports.updateMilestone = (req, res) => {
    milestone.MilestoneReview.updateMilestone(req.body.m_id, req.body.s_id, req.body.status, (err, data) => {
        if (err) {
            res.status(500).send({ error: "Error updating milestone data" });
        } else {
            res.send(data);
        }
    })
}

exports.updateMilestoneStudent = (req, res) => {
    milestone.MilestoneReview.updateMilestoneStudent(req.body.m_id, req.body.s_id, (err, data) => {
        if (err) {
            res.status(500).send({ error: "Error updating milestone data" });
        } else {
            res.send(data);
        }
    })
}

// exports.getMilestonesStudent = (req, res) => {
//     milestone.MilestoneReview.getMilestonesStudent(req.body.m_id, req.body.s_id, (err, data) => {
//         if (err) {
//             res.status(500).send({ error: "Error updating milestone data" });
//         } else {
//             res.send(data);
//         }
//     })
// }

exports.getAllMilestones = (req,res) =>{
    milestone.Milestone.getAllMilestones((err,data)=>{
        if (err) {
            res.status(500).send({ error: "Error retrieving milestone data" });
        } else {
            res.send(data);
        }
    })
}

