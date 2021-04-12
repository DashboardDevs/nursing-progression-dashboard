const advisor = require('../models/advisorModel');

exports.getAllAdvisors = (req, res) => {
    advisor.getAllAdvisors((err, data) => {
        if (err) {
            res.status(500).send({ error: "Error retrieving advisor data" })
        } else {
            res.send(data);
        }
    })
}

exports.getCommitteeForStudent = (req, res) => {
    advisor.getCommitteeForStudent(req.params.studentId, (err, data) => {
        if (err) {
            res.status(500).send({ error: "Error retrieving committee data" });
        } else {
            res.send(data);
        }
    })
}

exports.addCommitteeMember = (req, res) => {
    advisor.addCommitteeMember(req.body.studentId, req.body.memberId, (err, data) => {
        if (err) {
            res.status(500).send({ error: "Failed to add committee member" });
        } else {
            res.send(data);
        }
    })
}

exports.removeCommitteeMember = (req, res) => {
    advisor.removeCommitteeMember(req.body.studentId, req.body.memberId, (err, data) => {
        if (err) {
            res.status(500).send({ error: "Failed to delete committee member" });
        } else {
            res.send(data);
        }
    })
}

