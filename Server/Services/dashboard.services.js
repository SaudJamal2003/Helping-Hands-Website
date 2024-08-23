const db = require('../db');

module.exports.getDonations = async(body) => {
    const records = await db.query('SELECT u.first_name, d.donation_date, d.amount, d.donation_type FROM donationsystem.users u inner join donationsystem.donations d where u.user_id = d.user_id AND u.email = ?',[body.email]);
    console.log(records)
    return records[0];
}

module.exports.getTotalDonators = async (body) => {
    const count = await db.query('SELECT  count(u.first_name) as "count" FROM donationsystem.users u inner join donationsystem.donations d where u.user_id = d.user_id and u.email like ?',[body.email]);
    return count[0][0];
}

module.exports.getSum = async (body) => {
    const sum = await db.query('SELECT sum(d.amount) as "sum" FROM donationsystem.donations d inner join donationsystem.users u where d.user_id = u.user_id and u.email like ?', [body.email]);

    return sum[0][0];
}