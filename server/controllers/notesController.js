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