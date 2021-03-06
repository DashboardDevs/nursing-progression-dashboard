const db = require("../db.js");

const User = user =>{
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.dot_number = user.dot_number;
    this.advisor_id = user.advisor_id;
}

User.getAccountDetails = (lastName, dotNumber, result) => {
    const sql = `SELECT * FROM users WHERE last_name = '${lastName}' AND dot_number = ${dotNumber}`;
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

module.exports = User;