const db = require("../db.js");

const Advisor = advisor => {
    this.id = advisor.id;
    this.first_name = advisor.first_name;
    this.last_name = advisor.last_name;
    this.dot_number = advisor.dot_number;
}

Advisor.getAllAdvisors = (result) => {
    const sql = `SELECT * FROM users WHERE perms = 1`;
    db.query(sql, (err, res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res);
            return
        }
    })
}

Advisor.getCommitteeForStudent = (studentId, result) => {
    const sql = `SELECT *
    FROM users
    INNER JOIN committee_membership AS cm
    ON cm.member_id = users.id
    WHERE cm.s_id = ${studentId};`;
    db.query(sql, (err, res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res)
            return;
        }
    });
}

Advisor.getCommitteesForAdvisor = (advisorId, result) =>{
    const sql = `SELECT *
    FROM users
    INNER JOIN committee_membership AS cm
    ON cm.s_id = users.id
    WHERE cm.member_id = ${advisorId};`;
    db.query(sql, (err, res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res)
            return;
        }
    });
}

Advisor.addCommitteeMember = (studentId, advisorId, result) => {
    const sql = `INSERT INTO committee_membership (s_id, member_id) VALUES (${studentId},${advisorId})`;
    db.query(sql, (err, res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res)
            return;
        }
    });
}

Advisor.removeCommitteeMember = (studentId, advisorId, result) => {
    const sql = `DELETE FROM committee_membership WHERE s_id = ${studentId} AND member_id = ${advisorId}`;
    db.query(sql, (err, res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res)
            return;
        }
    });
}

module.exports = Advisor;