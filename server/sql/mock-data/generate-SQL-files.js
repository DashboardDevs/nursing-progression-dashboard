const fs = require('fs');
const students = require('./studentData.json');
const advisors = require('./advisorData.json');
const milestones = require('./milestoneData.json');

//Create populate_student.sql
var filePath = '../populate_students.sql';

fs.writeFile(filePath, 'USE nursingdb;\n', err => {
    if (err) throw err;
});

var sql = "INSERT INTO users(id,first_name,last_name,dot_number,advisor_id,graduation_date,perms) VALUES\n";
students.map((student, i) => {
    sql += `(${student.id},"${student.first_name}","${student.last_name}",${student.dot_number},${(advisors[i % advisors.length].id)},"2021-04-30",0)${i < (students.length - 1) ? `,` : `;`}\n`;
});

fs.appendFile(filePath, sql, err => {
    if (err) throw err;
});

//Create populate_advisors.sql
filePath = '../populate_advisors.sql';

fs.writeFile(filePath, 'USE nursingdb;\n', err => {
    if (err) throw err;
});

sql = "INSERT INTO users(id,first_name,last_name,dot_number,perms) VALUES\n";
advisors.map((advisor, i) => {
    sql += `(${advisor.id},"${advisor.first_name}","${advisor.last_name}",${advisor.dot_number},1)${i < (advisors.length - 1) ? `,` : `;`}\n`;
});

fs.appendFile(filePath, sql, err => {
    if (err) throw err;
});

//Create populate_milestones.sql
filePath = '../populate_milestones.sql';

fs.writeFile(filePath, 'USE nursingdb;\n', err => {
    if (err) throw err;
});

sql = "INSERT INTO milestones(name,description) VALUES\n";
milestones.map((milestone, i) => {
    sql += `("${milestone.name}","${milestone.description}")${i < (milestones.length - 1) ? `,` : `;`}\n`
});

fs.appendFile(filePath, sql, err => {
    if (err) throw err;
});

//Create populate_student_milestone.sql
filePath = '../populate_student_milestone.sql';

fs.writeFile(filePath, 'USE nursingdb;\n', err => {
    if (err) throw err;
});

sql = 'INSERT INTO student_milestone(s_id, m_id, status) VALUES \n';
students.map((student, i) => {
    milestones.map((milestone, j) => {
        var status;
        if (j < student.milestone ) {
            status = 3; //Complete
        } else if (j < student.milestone + 2) {
            status = 0; //Incomplete
        } else if (j < student.milestone + 4) {
            status = 1; //Inprogress
        } else {
            status = 2; //Unstarted
        }
        //console.log((i < students.length - 1) || )
        sql += `(${student.id},${j + 1}, ${status})${((i < students.length - 1) || (j < milestones.length - 1)) ? `,` : `;`}\n`;
    })
});

fs.appendFile(filePath, sql, err => {
    if (err) throw err;
});

//Create populate_committee_membership.sql
filePath = '../populate_committee_membership.sql';

fs.writeFile(filePath, 'USE nursingdb;\n', err => {
    if (err) throw err;
});

sql = 'INSERT INTO committee_membership(s_id, member_id) VALUES \n';
students.map((student,i)=>{
    sql+=`(${student.id},${(advisors[i % advisors.length].id)})${i < (students.length - 1) ? `,` : `;`}\n`;
})

fs.appendFile(filePath, sql, err => {
    if (err) throw err;
});

//Create populate_notes.sql
filePath = '../populate_notes.sql';

fs.writeFile(filePath, 'USE nursingdb;\n', err => {
    if (err) throw err;
});

sql = 'INSERT INTO notes(s_id, a_id, note, date) VALUES \n';
students.map((student,i)=>{
    sql+=`(${student.id}, ${(advisors[i % advisors.length].id)}, "Sample notes.", CURDATE())${i < (students.length - 1) ? `,` : `;`}\n`;
});

fs.appendFile(filePath, sql, err => {
    if (err) throw err;
});