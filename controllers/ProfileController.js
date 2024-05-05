const prisma = require("../lib/prisma");
const response = require("./../lib/response")

exports.getProfile = async (req, res) => {
    try {
        const data = await prisma.profile.findMany();
        response(200, data, 'Get All Data', res);
    } catch (error) {
        response(500, error, 'Data Not Found', res);
    }
};

