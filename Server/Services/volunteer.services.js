const db = require('../db');

module.exports.addOrEdit = async(obj, id = 0) => {
    const [affectedRows1] = await db.query('SELECT foundation_id from foundations where foundation_name like ?',
    [obj.foundation_name]);

    const foundation_id = affectedRows1[0].foundation_id;

    const [{affectedRows2}] = await db.query('CALL usp_volunteer_insert_edit(?,?,?,?, sysdate())',
    [id, obj.volunteer_name, foundation_id, obj.email]);
    return affectedRows2;
}



module.exports.getAllVolunteers = async () => {
    const records = await db.query('SELECT * FROM volunteers'); 
    return records[0];
}