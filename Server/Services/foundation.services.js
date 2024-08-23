const db = require('../db');

module.exports.getFoundationNames = async() => {
    const foundationNames = await db.query('select f.foundation_name, f.foundation_description, l.city_name from donationsystem.foundations f inner join donationsystem.locations l where f.location_id = l.location_id');
    return foundationNames[0];
}