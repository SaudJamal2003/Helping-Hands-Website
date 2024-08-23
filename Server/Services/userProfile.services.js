const db = require('../db');

module.exports.getUserDetails = async(body) => {
    const records = await db.query('SELECT first_name, email, registration_date FROM donationsystem.users where email like ?',[body.email]);
    console.log(records)
    return records[0];
}