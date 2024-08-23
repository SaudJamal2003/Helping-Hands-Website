const db = require('../db');

module.exports.getQueryDetails = async (queryName, body) => {
    console.log(body.email)
    const record = await db.query("select v.*, f.foundation_name from donationsystem.volunteers v inner join donationsystem.foundations f where v.foundation_id = f.foundation_id and v.volunteer_name like ? and f.email like ?",
    [queryName, body.email]);
    console.log(record[0]);
    return record[0]; 
}

module.exports.getTotalReceivedDonations = async (body) => {
    console.log(body.email)
    const amount = await db.query("select sum(amount) as 'sum' from donationsystem.donations where foundation_name in (select foundation_name from donationsystem.foundations where email = ?)",
    [body.email]);
    return amount[0];
}

module.exports.getVolunteerCount = async (body) => {
    const count = await db.query("select count(volunteer_id) as 'count' from donationsystem.volunteers where foundation_id in (select foundation_id from donationsystem.foundations where email = ?)",
    [body.email]);
    return count[0]
}