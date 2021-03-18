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

module.exports = Milestone;