const note = require('../models/notesModel');

exports.getNotesForStudent = (req, res) => {
    note.Note.getNotesForStudent(req.params.studentId, (err, data) => {
        if (err) {
            res.status(500).send({ error: "Error retrieving note data" });
        } else {
            res.send(data);
        }
    })
}

exports.addNote = (req, res) => {
    note.Note.addNote(req.body.s_id, req.body.a_id, req.body.note, req.body.date,(err, data) => {
        if (err) {
            res.status(500).send({ error: "Error adding note" });
        } else {
            res.send(data);
        }
    })
}