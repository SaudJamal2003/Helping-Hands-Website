const db = require('../db');

module.exports.insertCashDetails = async (obj, id = 0) => {
    try {
        const query = `CALL InsertCashDonation(?, ?, ?, ?, ?, ?, ?, ?)`;

        const [result] = await db.query(query, [
            obj.foundation_name,
            obj.Card_Holder,
            obj.amount,
            obj.card_number,
            obj.CVC_code,
            obj.address,
            obj.state,
            obj.zip_code            
        ]);

        return result.affectedRows;
    } catch (error) {
        // Handle or log the error
        console.error(error);
        // Optionally rethrow the error for higher-level error handling
        throw error;
    }
};
