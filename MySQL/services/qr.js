const { DATE } = require("mysql/lib/protocol/constants/types");
const db = require("../connection/mysql.connection");
//INSERT INTO `users`(`ID`, `name`, `rate`, `price`, `balance`) VALUES ('B283939', 'Sancho Panza', 'Regular', 0.66, 20)
async function generateQR(req) {
    const data = await db.execute(`CALL generateQR(${req.body.ID});`, []);
    const firstKey = Object.keys(data[0][0]);

    return data[0][0][firstKey];
}

async function confirm(req) {
    const data = await db.execute(
        `CALL confirm(${req.body.ID});`, []
    );

    return {
        data,
    };
}


module.exports = {
    generateQR,
    confirm
};