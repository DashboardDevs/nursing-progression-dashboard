const db = require("../db.js");

const Note = note => {
    this.notes = [note.map((n) => {
        return {
            id: n.id,
            s_id: n.s_id,
            a_id: n.a_id,
            note: n.note,
            date: n.date
        }
    })]
}

Note.getNotesForStudent = (s_id, result)=> {
    const sql =`SELECT note, date FROM notes WHERE s_id = ${s_id}`;
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

Note.addNote = (studentId, advisorId, note, date, result)=> {
    const sql = `INSERT INTO notes (s_id, a_id, note, date) VALUES (${studentId},${advisorId},"${note}",CURDATE())`;
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

Note.deleteNote = (studentId, note, result) => {
    const sql = `DELETE FROM notes WHERE s_id = ${studentId} AND note = "${note}"`;
    db.query(sql, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        } else {
            result(null, res)
            return;
        }
    });
}

module.exports = {Note};