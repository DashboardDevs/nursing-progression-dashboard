const db = require("../db.js");

const Milestone = milestone => {
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
            submitted: m.submitted,
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
            result(null, res)
            return;
        }
    })
}

MilestoneReview.getMilestonesForReviewForAdvisor = (advisorId, result) => {
    const sql = `SELECT M.id, M.name, SM.submitted, U.id AS s_id, U.first_name, U.last_name FROM users AS U, milestones AS M, student_milestone AS SM WHERE U.id = SM.s_id AND SM.m_id = m.id AND SM.status = 1 AND SM.s_id IN (SELECT id FROM users WHERE users.advisor_id = ${advisorId})`;
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

MilestoneReview.updateMilestone = (milestoneId, studentId, status, result) => {
    const sql = status === 3 ? `UPDATE student_milestone SET status = ${status}, completed = current_date() WHERE s_id = ${studentId} AND m_id = ${milestoneId};`
        : `UPDATE student_milestone SET status = ${status}, submitted = null WHERE s_id = ${studentId} AND m_id = ${milestoneId};`;
    db.query(sql, (err, res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            // Nest query instead?
            // If status is set to complete find the base milestone that the prereq unlocks
            if (status === 3) {
                const prereq = `SELECT base_id FROM prerequisites WHERE prereq_id = ${milestoneId}`;
                db.query(prereq, (err, res) => {
                    console.log(res);
                    if (err) {
                        console.log(err);
                        return;
                    // if res is null then completed milestone is not a prerequisite
                    } else if (res.length){
                        // Use the base_id to update the correct milestone
                        console.log(res[0].base_id);
                        const prereq_update = `UPDATE student_milestone SET status = 0 WHERE s_id = ${studentId} AND m_id = ${res[0].base_id}`;
                        db.query(prereq_update, (err, res) => {
                            if (err) {
                                console.log(err);
                                return;
                            } else {
                                console.log(res);
                                return;
                            }
                        })
                    }
                })
            }

            result(null,res);
            return;
        }
    })
}


MilestoneReview.getRedMilestonesStudent = (studentId, result) => {
    const sql =  `SELECT M.id, M.name FROM nursingdb.milestones AS M INNER JOIN nursingdb.student_milestone AS SM ON M.id = SM.m_id WHERE SM.s_id =${studentId} AND SM.status = 0`;
    db.query(sql, (err, res) => {
        if (err) {
            result(err, null);
            return;
        } else {
           result(null,res);
           return;
        }
    })
}

Milestone.getAllMilestones = (result) => {
    const sql = `SELECT id, name FROM milestones;`;
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

module.exports = {Milestone, MilestoneReview};
