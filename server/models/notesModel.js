const db = require("../db.js");

const Note = note => {
    this.notes = [note.map((n) => {
        return {
            id: n.id,
            studentId: n.s_id,
            advisorId: n.a_id,
            note: n.note,
            date: n.date
        }
    })]
}

Note.getNotesForStudent = (studentId, result)=> {
    const sql =`SELECT note, date FROM notes WHERE s_id = ${studentId}`;
    db.query(sql, (err, res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res)
            return;
        }
    })
}

module.exports = {Note};