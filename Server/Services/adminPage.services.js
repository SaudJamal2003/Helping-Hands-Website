const db = require('../db');

module.exports.getVolunteerDetails = async () => {
    const details = await db.query('select v.volunteer_name, f.foundation_name, v.email, v.registration_date, v._status from donationsystem.volunteers v inner join donationsystem.foundations f where v.foundation_id = f.foundation_id ORDER BY v.registration_date DESC');
    return details[0];
}

module.exports.getTotalDonations = async () => {
    const amount = await db.query("select sum(amount) as 'sum' from donationsystem.donations")
    return amount[0];
}

module.exports.getTotalDonators = async () => {
    const noPeople = await db.query("select count(user_id) as 'count' from donationsystem.users")
    return noPeople[0];
}

module.exports.getTotalVolunteers = async () => {
    const noVolunteer = await db.query("select count(volunteer_id) as 'count' from donationsystem.volunteers where _status like 'Approved'")
    return noVolunteer[0];
}

module.exports.updateStatus = async (obj) => {
    const [{update}] = await db.query("update donationsystem.volunteers set _status = 'Approved' where email like ? ",
    [obj._email]);
    return update;
}

module.exports.updateStatusForRejection = async (obj) => {
    const [{update}] = await db.query("update donationsystem.volunteers set _status = 'Rejected' where email like ? ",
    [obj._email]);
    return update;
}

module.exports.getQueryDetails = async (queryName) => {
    const record = await db.query('select v.volunteer_name, f.foundation_name, v.email, v.registration_date, v._status from donationsystem.volunteers v inner join donationsystem.foundations f where v.foundation_id = f.foundation_id AND v.volunteer_name like ?',
    [queryName]);
    console.log(record[0]);
    return record[0]; 
}

