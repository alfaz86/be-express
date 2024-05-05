const { PrismaClient } = require('@prisma/client');
const response = require('./response');
const prisma = new PrismaClient();

const getAllTableNames = async (req, res) => {
    try {
        const result = await prisma.$queryRaw`SHOW TABLES`;
        const tableNames = result.map(row => Object.values(row)[0]);
        response(200, tableNames, 'Get All Tables', res);
    } catch (error) {
        console.error('Error fetching table names:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }

}

module.exports = getAllTableNames;