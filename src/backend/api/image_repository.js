const { getConnection, closeConnection } = require('../database/db');

const getImgById = (imgId, connection, callback) => {
    connection.query('SELECT * FROM MNIST_Image WHERE ID = ?', imgId, (err, img_data) => 
    {
        if (err)
        {
            console.log(err);
            closeConnection(connection);
            callback(null);
            return;
        }

        closeConnection(connection);
        callback(img_data); 
    })
}

const putVoteOnImage = (imgId, voteNum, connection, callback) => {
    connection.query(`UPDATE MNIST_Image SET Vote_${voteNum} = Vote_${voteNum} + 1  WHERE ID = ?`, imgId, (err, result) => 
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

const putDeviationOnImage = (imgId, deviation, connection, callback) => {
    connection.query(`UPDATE MNIST_Image SET Deviation = ${deviation}  WHERE ID = ?`, imgId, (err, result) => 
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
    getImgById,
    putVoteOnImage,
    putDeviationOnImage
}