const response = require("./../lib/response")
const db = require("./../lib/database")

exports.getContent = async (req, res) => {
    try {
        const [data, fields] = await db.execute('SELECT * FROM content');
        response(200, data, 'Get All Data', res);
    } catch (error) {
        response(500, error, 'Data Not Found', res);
    }
};

