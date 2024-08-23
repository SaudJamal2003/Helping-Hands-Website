const db = require('../db');

module.exports.insertClothDetails = async(obj, id=0) =>{
    // const [affectedRows1] = await db.query('SELECT foundation_id from foundations where foundation_name like ?',
    // [obj.foundation_name]);

    // const foundation_id = affectedRows1[0].foundation_id;
    // console.log('foundation id = ', foundation_id);

    // const [affectedRows3] = await db.query('SELECT user_id from users where first_name like ?',[obj.name]);
    // const user_id = affectedRows3[0].user_id;
    // console.log('User ID = ', user_id);

    // const donation_type = 'Cloth';

    // await db.query('INSERT INTO donations(donation_id, user_id, foundation_name, donation_type, donation_date, donation_time, amount) VALUES(?,?,?,?, sysdate(), current_time(), ?)',
    // [id,user_id, obj.foundation_name, donation_type, obj.amount])

    // const [{affectedRows2}] = await db.query('INSERT INTO ClothDonation(cd_id, pickup_location, donation_date, donation_time, quantity, city, zip_code, foundation_id) VALUES (?, ?, sysdate(), current_time(), ?, ?, ?, ?)',
    // [0, obj.pickup_location, obj.quantity, obj.city, obj.zip_code, foundation_id]);
    // return affectedRows2;
    try {
        const query = `CALL InsertClothDonation(?, ?, ?, ?, ?, ?)`;

        const [result] = await db.query(query, [
            obj.foundation_name,
            obj.pickup_location,
            obj.quantity,
            obj.city,
            obj.zip_code,
            obj.name
        ]);

        return result.affectedRows;
    } catch (error) {
        // Handle or log the error
        console.error(error);

        // Optionally rethrow the error for higher-level error handling
        throw error;
    }
}