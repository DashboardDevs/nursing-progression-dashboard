const db = require("../db.js");

const Milestone = milestone =>{
    this.s_id = milestone.s_id;
    this.m_id = milestone.m_id;
    this.status = milestone.status;
}

Milestone.getAllMilestonesForStudent = (studentId, result) =>{
    const sql = `SELECT * FROM student_milestone WHERE s_id = ${studentId}`;
    db.query(sql,(err,res)=>{
        if(err){
            result(err,null);
            return;
        }else{
            result(null,res);
            return
        }
    })
}

Milestone.updateMilestoneStatus = (milestoneId, studentId, result) =>{
    const sql = `UPDATE student_milestone SET status = status + 1 WHERE s_id = ${studentId} AND m_id = ${milestoneId}`;
    db.query(sql,(err,res)=>{
        if(err){
            result(err,null);
            return;
        }else{
            result(null,res);
            return
        }
    })
}

module.exports = Milestone;