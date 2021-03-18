const user = require('../models/userModel');
const url = require('url');
const querystring = require('querystring');

exports.getAccountDetails = (req, res) => {
    user.getAccountDetails(req.query.last_name, req.query.dot_number, (err, data) => {
        if (err) {
            res.status(500).send({ error: "Error retrieving user data" });
        } else {
            res.send(data);
        }
    })
}
