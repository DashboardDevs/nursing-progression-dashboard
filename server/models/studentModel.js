const db = require("../db.js");

const Student = student =>{
    this.id = student.id;
    this.first_name = student.first_name;
    this.last_name = student.last_name;
    this.dot_number = student.dot_number;
    this.advisor_id = student.advisor_id;
}

Student.getAllStudents = (result) =>{
    const sql = `SELECT * FROM users WHERE perms = 0`;
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

Student.findByAdvisorId = (advisorId, result) => {
    const sql = `SELECT * FROM users WHERE advisor_id = ${advisorId}`;
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

Student.getStudentById = (studentId, result) => {
    const sql = `SELECT * FROM users WHERE id = ${studentId}`;
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

module.exports = Student;