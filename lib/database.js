const prisma = require('./prisma');
const response = require('./response');

const getAllTableNames = async (req, res) => {
    try {
        const result = await prisma.$queryRaw`SHOW TABLES`;
        const tableNames = result.map(row => Object.values(row)[0]);
        response(200, tableNames, 'Get All Tables', res);
    } catch (error) {
        console.error('Error fetching table names:', error);
        throw error;
    }

}

module.exports = getAllTableNames;