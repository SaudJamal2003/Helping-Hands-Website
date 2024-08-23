const db = require('../db');

module.exports.getFoundationsDetails = async () => {
    const details = await db.query('select f.foundation_name, f.foundation_id, f.location_id,f.email, f._status from donationsystem.foundations f where f.foundation_id != 1');
    return details[0];
}

module.exports.getTotalDonations = async () => {
    const amount = await db.query("select sum(amount) as 'sum' from donationsystem.donations")
    return amount[0];
}

module.exports.getTotalDonators = async () => {
    const noPeople = await db.query("select count(user_id) as 'users' from donationsystem.users")
    return noPeople[0];
}

module.exports.getTotalFoundations = async () => {
    const noVolunteer = await db.query("select count(foundation_id) as 'count' from donationsystem.foundations where _status like 'Approved'")
    return noVolunteer[0];
}

module.exports.updateStatus = async (obj) => {
    const [{update}] = await db.query("update donationsystem.foundations set _status = 'Approved' where email like ? ",
    [obj._email]);
    return update;
}

module.exports.updateStatusReject = async (obj) => {
    const [{update}] = await db.query("update donationsystem.foundations set _status = 'Rejected' where email like ? ",
    [obj._email]);
    return update;
}

module.exports.getFoundationQueryDetails = async (queryName) => {
    const record = await db.query('select f.foundation_name, f.foundation_id, f.email, f.location_id, f._status from donationsystem.foundations f where f.foundation_name like ?',
    [queryName]);
    console.log(record[0]);
    return record[0]; 
}

