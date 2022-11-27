const { setPWforDBconfig } = require('./database/db-config')
const db = require('./database/db');
const express = require('express');
const cors = require('cors')

// Init and config express webserver
var app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors())

const PORT = process.env.PORT || 3030;


//Start actual webservice
const startWebService = () => {
    app.listen(PORT, () => console.log(`Express server is running at port no: ${PORT}`));
}


const pw = process.argv.slice(2)[0];
setPWforDBconfig( pw, startWebService );


// Controller section START
const image_repository = require('./api/image_repository')
const tester_repository = require('./api/tester_repository')
const stat_repository = require('./api/stat_repository')

// ===== Wake up =====
app.get('/wakeup', (req, res) => {
    console.log('wakey wakey')
    res.sendStatus(200);
})

// ===== Images =====

app.get('/images/:imgId', (req, res) => {
    let ID = req.params.imgId;
    image_repository.getImgById(ID, (img_data) => {
        res.json(img_data);
    });
})

app.put('/images/:imgId/vote/:voteNum', (req, res) => {
    let ID = req.params.imgId;
    let voteNum = req.params.voteNum;

    image_repository.putVoteOnImage(ID, voteNum, (result) => {
        res.json(result);
    })
})

app.put('/images/:imgId/dev', (req, res) => {
    let ID = req.params.imgId;
    let deviation = req.body.Deviation;

    image_repository.putDeviationOnImage(ID, deviation, (result) => {
        res.json(result);
    })
})

// ===== Tester =====

app.get('/tester/:testerId/done', (req, res) => {
    let testerId = req.params.testerId;
    tester_repository.getDoneTestsIdByTesterId(testerId, (idList) => {
        res.json(idList);
    })
})

app.post('/tester', (req, res) => {
    const postData = req.body;

    if (postData.Gender != 'o' && 
        postData.Gender != 'f' &&
        postData.Gender != 'm' ||
        postData.Age < 0 ||
        postData.Age > 150) {
            res.json(null);
            return;
    }

    tester_repository.postTester(postData, (result) => {
        res.json(result.insertId);
    })

})

app.post('/tester/:testerId/done/:imgId', (req, res) => {
    let testerId = req.params.testerId;
    let imgId    = req.params.imgId;
    let date     = req.body;

    tester_repository.postTesterDoneTest(testerId, imgId, date, (result) => {
        res.json(result);
    })
})

app.get('/tester/:testerId/highdeviation', (req, res) => {
    let testerID = req.params.testerId;

    tester_repository.getHighestDeviationNotDoneByTester(testerID, (result) => {
        res.json(result);
    })
})

// ===== MNIST image =====

app.get('/MNIST_images/MNIST-JPG-testing/:val/:imgId.jpg', (req, res) => {
    let value = req.params.val;
    let imgId = req.params.imgId;

    var fs = require('fs');

    var imageAsBase64 = fs.readFileSync('../../MNIST_images/MNIST-JPG-testing/' + value + '/' + imgId + '.jpg', 'base64');
    res.end(imageAsBase64);
})

// ===== Statistics =====

// Női/Férfi eloszlás kitöltés
app.get('/stat/gender/tests', (req, res) => {

    stat_repository.getCountOfTestsDoneByGenders((result) => {
        res.json(result);
    })
})

// Női/Férfi kitöltők
app.get('/stat/gender/testers', (req, res) => {

    stat_repository.getCountOfGenders((result) => {
        res.json(result);
    })
})

// Végzettség szerint kitöltés
app.get('/stat/studies/tests', (req, res) => {

    stat_repository.getCountOfTestsDoneByStudies((result) => {
        res.json(result);
    })
})

// Végzettség szerint kitöltő
app.get('/stat/studies/testers', (req, res) => {

    stat_repository.getCountOfStudies((result) => {
        res.json(result);
    })
})

// Korosztályok szerinti kitöltő
app.get('/stat/ages', (req, res) => {

    stat_repository.getCountOfAges((result) => {
        res.json(result);
    })
})

// TOP 5 szórás
app.get('/stat/topDev', (req, res) => {

    stat_repository.getTopDeviationOnImages((result) => {
        res.json(result);
    })
})

// TOP 10 streak
app.get('/stat/topStreak', (req, res) => {

    stat_repository.getTopStreakOfTesters((result) => {
        res.json(result);
    })
})

// Controller section END