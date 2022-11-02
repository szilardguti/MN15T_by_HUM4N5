const { getConnection, closeConnection } = require('../database/db');

const getDoneTestsIdByTesterId = (testerId, callback) => {
    let connection = getConnection();
    connection.query('SELECT Tests.ImageID FROM Tests WHERE Tests.TesterID = ?', testerId, (err, idList) => 
    {
        if (err)
        {
            console.log(err);
            closeConnection(connection);
            return callback(null);
        }

        closeConnection(connection);
        callback(idList); 
    })
}

const postTester = (testerData, callback) => {
    let connection = getConnection();
    connection.query('INSERT INTO Tester SET ?', testerData, (err, results) => 
    {
        if (err)
        {
            console.log(err);
            closeConnection(connection);
            return callback(null);
        }

        closeConnection(connection);
        callback(results); 
    })
}

const postTesterDoneTest = (testerId, imgId, date, callback) => {
    let connection = getConnection();

    let postData = {
        "TesterID" : testerId,
        "ImageID" : imgId,
        "TestDate" : date.TestDate
    }

    connection.query('INSERT INTO Tests SET ?', postData, (err, res) => 
    {
        if (err)
        {
            console.log(err);
            closeConnection(connection);
            callback(false);
            return;
        }

        closeConnection(connection);
        callback(true); 
    })
}

const getHighestDeviationNotDoneByTester = (testerId, callback) => {
    let connection = getConnection();
    connection.query(`SELECT * FROM MNIST_Image AS mimg WHERE mimg.ID NOT IN ( SELECT Tests.ImageID FROM Tests WHERE Tests.TesterID = ?) ORDER BY mimg.Deviation DESC LIMIT 1;`, testerId, (err, result) => 
    {
        if (err)
        {
            console.log(err);
            closeConnection(connection);
            return callback(null);
        }

        closeConnection(connection);
        callback(result); 
    })
}

module.exports = {
    getDoneTestsIdByTesterId,
    postTester,
    postTesterDoneTest,
    getHighestDeviationNotDoneByTester
}