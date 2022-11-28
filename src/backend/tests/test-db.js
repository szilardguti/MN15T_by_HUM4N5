const mysql = require('mysql');

const sqlData1 = `TRUNCATE \`mn15t_by_hum4n5\`.\`mnist_image\`\;`;
const sqlData2 = `TRUNCATE \`mn15t_by_hum4n5\`.\`tester\`\;`;
const sqlData3 = `TRUNCATE \`mn15t_by_hum4n5\`.\`tests\`\;`;
const sqlData4 = `INSERT INTO \`mn15t_by_hum4n5\`.\`mnist_image\` (\`ID\`, \`RealValue\`, \`Vote_0\`, \`Vote_1\`, \`Vote_2\`, \`Vote_3\`, \`Vote_4\`, \`Vote_5\`, \`Vote_6\`, \`Vote_7\`, \`Vote_8\`, \`Vote_9\`, \`Deviation\`, \`ImagePath\`) VALUES ('1', '100', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 'test-path')\;`;

const dbconfig = {
    host: "localhost",
    port: '3306',
    user: "root",
    password: "mySQLijen:nagyonlyo!!4!!",
    database: "mn15t_by_hum4n5",
    connectTimeout: 100000, 
    acquireTimeout: 100000
}

var connection;

const getConnection = () => {
    connection = mysql.createConnection(dbconfig);
    return connection;
}

const closeConnection = (conn) => {
    conn.end();
}

const initalizeDatabase = (callback) => {
    var connection = getConnection();

    connection.query(sqlData1);
    connection.query(sqlData2);
    connection.query(sqlData3);
    connection.query(sqlData4, () => {
        callback();
    });

    closeConnection(connection);
}

module.exports = {
    getConnection,
    closeConnection,
    initalizeDatabase
}