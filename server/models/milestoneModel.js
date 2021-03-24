const db = require("../db.js");

const Milestone = milestone =>{
    this.milestones = [milestone.map((m) => {
        return {
            id: m.id,
            name: m.name,
            description: m.description,
            status: m.status
        }
    })]
}

const MilestoneReview = milestone =>{
    this.milestones = [milestone.map((m) => {
        return {
            id: m.id,
            name: m.name,
            s_id: m.s_id,
            s_fName: m.first_name,
            s_lName: m.last_name
        }
    })]
}

Milestone.getMilestonesForStudent = (studentId, result) => {
    const sql = `SELECT M.id, M.name, M.description, SM.status FROM milestones AS M, student_milestone AS SM WHERE SM.s_id = ${studentId} AND SM.m_id = m.id`;
    db.query(sql, (err, res) => {
        if (err) {
            result(err, null);
            return;
        } else {
           result(null,res)
           return;
        }
    })
}

MilestoneReview.getMilestonesForReviewForAdvisor = (advisorId, result) => {
    const sql = `SELECT M.id, M.name, U.id AS s_id, U.first_name, U.last_name FROM users AS U, milestones AS M, student_milestone AS SM WHERE U.id = SM.s_id AND SM.m_id = m.id AND SM.status = 1 AND SM.s_id IN (SELECT id FROM users WHERE users.advisor_id = ${advisorId})`;
    db.query(sql, (err, res) => {
        if (err) {
            result(err, null);
            return;
        } else {
           result(null,res)
           return;
        }
    })

}

module.exports = {Milestone, MilestoneReview};