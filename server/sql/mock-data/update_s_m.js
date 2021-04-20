const students = require('./studentData.json');
const fs = require('fs');

//Create populate_student_milestone.sql
filePath = '../populate_student_milestone.sql';

/*
fs.writeFile(filePath, 'USE nursingdb;\n', err => {
    if (err) throw err;
});
*/

sql = 'INSERT INTO student_milestone(s_id, m_id, status) VALUES \n';
students.map((student, i) => {
    sql += `(${student.id},15, 2)${(i < students.length - 1) ? `,` : `;`}\n`;
});

console.log(sql)