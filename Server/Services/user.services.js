const db = require('../db');

module.exports.addOrEdit = async (obj, id = 0) => {
    const [{ affectedRows }] = await db.query('CALL usp_user_insert_edit(?,?,?,?, sysdate())',
        [id, obj.first_name, obj.email, obj.user_password]);
    return affectedRows;

}

module.exports.getAllUsers = async () => {
    const records = await db.query('SELECT * FROM users');
    return records[0];
}

module.exports.loginUser = async (obj) => {
    const records = await db.query('select email, first_name, user_id from donationsystem.users where email like ? and usr_password like ?',
        [obj.email, obj.user_password]);
        console.log(records)
    return records[0].length > 0 ? records[0][0] : false;
}

module.exports.forgetPassword = async (obj) => {
    const records = await db.query('select email, first_name, user_id from donationsystem.users where email like ? ',
        [obj.email]);
        // console.log(records)
    return records[0].length > 0 ? records[0][0] : false;
}

module.exports.forgetFoundationPassword = async (obj) => {
    const records = await db.query('select email, foundation_name, foundation_id from donationsystem.foundations where email like ? ',
        [obj.email]);
        // console.log(records)
    return records[0].length > 0 ? records[0][0] : false;
}

// module.exports.resetPassword = async (id, pass) => {
//     const updation = await db.query('update donationsystem.users set usr_password = ?  where user_id = ?',
//     [pass, id]);
//     return updation[0].length > 0 ? updation[0][0] : false;
// }
module.exports.resetPassword = async (obj) => {
    const [{update}] = await db.query('UPDATE donationsystem.users SET usr_password = ? WHERE user_id = ?',
    [obj.usr_password, obj.user_id]);
    console.log(obj.usr_password);
    return update;
}

module.exports.resetFoundationPassword = async (obj) => {
    const [{update}] = await db.query('UPDATE donationsystem.foundations SET foundation_password = ? WHERE foundation_id = ?',
    [obj.foundation_password, obj.foundation_id]);
    console.log(obj.foundation_password);
    return update;
}

module.exports.loginFoundation = async (obj) => {
    const records = await db.query('select * from donationsystem.foundations where email like ? and foundation_password like ?',
        [obj.email, obj._password]);
        return records[0].length > 0 ? records[0][0] : false;
};

module.exports.getUserName = async (body) => {
    const name = await db.query('select first_name from donationsystem.users where email like ?',
    [body.email]);
    console.log(body.email)
    return name[0];
}

module.exports.registerFoundation = async (obj, id=0) => {
    const name = await db.query('INSERT into donationsystem.foundations (foundation_id, foundation_name, foundation_owner_name, foundation_description, address, location_id, email, foundation_password ) values (?, ?, ?, ?, ?, ?, ?, ?)',
    [id, obj.name, obj.owner, obj.description, obj.address, obj.location ,obj.email, obj._password]);
    return name[0];
}