const { getConnection, closeConnection } = require('../database/db');

const getImgById = (imgId, callback) => {
    let connection = getConnection();
    connection.query('SELECT * FROM MNIST_Image WHERE ID = ?', imgId, (err, img_data) => 
    {
        if (err)
        {
            console.log(err);
            closeConnection(connection);
            return callback(null);
        }

        closeConnection(connection);
        callback(img_data); 
    })
}

const putVoteOnImage = (imgId, voteNum, callback) => {
    let connection = getConnection();
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

const putDeviationOnImage = (imgId, deviation, callback) => {
    let connection = getConnection();
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