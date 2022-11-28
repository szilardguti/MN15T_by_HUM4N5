const { getConnection, closeConnection } = require('../database/db');

const getCountOfTestsDoneByGenders = (connection, callback) => {
    
    connection.query('SELECT Tester.Gender, COUNT(*) AS TestCount FROM Tests JOIN Tester ON Tests.TesterID = Tester.ID GROUP BY Tester.Gender', (err, res) => 
    {
        if (err)
        {
            console.log(err);
            closeConnection(connection);
            return callback(null);
        }

        closeConnection(connection);
        callback(res); 
    })
}

const getCountOfGenders = (connection, callback) => {
    
    connection.query('SELECT Tester.Gender, COUNT(*) AS TesterCount FROM Tester GROUP BY Tester.Gender', (err, res) => 
    {
        if (err)
        {
            console.log(err);
            closeConnection(connection);
            return callback(null);
        }

        closeConnection(connection);
        callback(res); 
    })
}

const getCountOfTestsDoneByStudies = (connection, callback) => {
    
    connection.query('SELECT Tester.Studies, COUNT(*) AS TestCount FROM Tester JOIN Tests ON Tests.TesterID = Tester.ID GROUP BY Tester.Studies', (err, res) => 
    {
        if (err)
        {
            console.log(err);
            closeConnection(connection);
            return callback(null);
        }

        closeConnection(connection);
        callback(res); 
    })
}

const getCountOfStudies = (connection, callback) => {
    
    connection.query('SELECT Tester.Studies, COUNT(*) AS TesterCount FROM Tester GROUP BY Tester.Studies', (err, res) => 
    {
        if (err)
        {
            console.log(err);
            closeConnection(connection);
            return callback(null);
        }

        closeConnection(connection);
        callback(res); 
    })
}

const getCountOfAges = (connection, callback) => {
    
    connection.query(`SELECT
        t.range,
        COUNT(*) AS \`AgeCount\`
        FROM
        (
        SELECT
            Tester.Age AS age,
            CASE WHEN age >= 12 AND age < 19 THEN '12-18'
            WHEN age >= 19 AND age < 24 THEN '19-23' 
            WHEN age >= 24 AND age < 33 THEN '24-32'
            WHEN age >= 32 AND age < 49 THEN '32-48'
            WHEN age >= 49 AND age < 65 THEN '49-64'
            WHEN age >= 65 AND age < 101 THEN '65-100'
            ELSE 'undefined'
        END AS \`Range\`
        FROM
        Tester
        ) AS t
        GROUP BY
        t.range
        ORDER BY
        t.range`,
    (err, res) => 
    {
        if (err)
        {
            console.log(err);
            closeConnection(connection);
            return callback(null);
        }

        closeConnection(connection);
        callback(res); 
    })
}

const getTopDeviationOnImages = (connection, callback) => {

    connection.query('SELECT * FROM MNIST_Image ORDER BY MNIST_Image.Deviation DESC LIMIT 5', (err, res) => 
    {
        if (err)
        {
            console.log(err);
            closeConnection(connection);
            return callback(null);
        }

        closeConnection(connection);
        callback(res); 
    })
}

const getTopStreakOfTesters = (connection, callback) => {

    connection.query('SELECT Tests.TesterID, COUNT(*) AS testCount FROM Tests GROUP BY Tests.TesterID ORDER BY testCount DESC LIMIT 10', (err, res) => 
    {
        if (err)
        {
            console.log(err);
            closeConnection(connection);
            return callback(null);
        }

        closeConnection(connection);
        callback(res); 
    })
}

module.exports = {
    getCountOfTestsDoneByGenders,
    getCountOfGenders,
    getCountOfTestsDoneByStudies,
    getCountOfStudies,
    getCountOfAges,
    getTopDeviationOnImages,
    getTopStreakOfTesters
}