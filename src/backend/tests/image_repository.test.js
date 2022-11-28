const testdb = require('./test-db')
const repository = require('../api/image_repository')

var connection;


beforeAll(done => {
    return testdb.initalizeDatabase(done);
})

beforeEach(() => {
    connection = testdb.getConnection();
})

test('get image by id should return base image data', done => {
    const wantedData = { ID: 1, RealValue: 100, Vote_0 : 1, Vote_1 : 1, Vote_2 : 1, Vote_3 : 1, Vote_4 : 1, Vote_5 : 1, 
        Vote_6 : 1, Vote_7 : 1, Vote_8 : 1, Vote_9 : 1, Deviation: 1.0000000000000, ImagePath: 'test-path'};

        repository.getImgById(1, connection, (result) => {
            try{
                let res = result[0];
                expect(res.ID).toBe(wantedData.ID);
                expect(res.RealValue).toBe(wantedData.RealValue);
                expect(res.Vote_0).toBe(wantedData.Vote_0);
                expect(res.Vote_1).toBe(wantedData.Vote_1);
                expect(res.Vote_2).toBe(wantedData.Vote_2);
                expect(res.Vote_3).toBe(wantedData.Vote_3);
                expect(res.Vote_4).toBe(wantedData.Vote_4);
                expect(res.Vote_5).toBe(wantedData.Vote_5);
                expect(res.Vote_6).toBe(wantedData.Vote_6);
                expect(res.Vote_7).toBe(wantedData.Vote_7);
                expect(res.Vote_8).toBe(wantedData.Vote_8);
                expect(res.Vote_9).toBe(wantedData.Vote_9);
                expect(res.Deviation).toBe(wantedData.Deviation);
                expect(res.ImagePath).toBe(wantedData.ImagePath);
                done();
            }
            catch (error){
                done(error);
            }
        })

})

test('vote on image should change one row', done => {

    repository.putVoteOnImage(1, 0, connection, (result) => {
        try{
            expect(result.changedRows).toBe(1);
            done();
        }
        catch (error){
            done(error);
        }
    })
})

test('set deviation on image should change one row', done => {

    repository.putDeviationOnImage(1, 2, connection, (result) => {
        try{
            expect(result.changedRows).toBe(1);
            done();
        }
        catch (error){
            done(error);
        }
    })
})

test('get image by id should return updated image data', done => {
    const wantedData = { ID: 1, Vote_0 : 2, Deviation: 2.0000000000000 };

        repository.getImgById(1, connection, (result) => {
            try{
                let res = result[0];
                expect(res.ID).toBe(wantedData.ID);
                expect(res.Vote_0).toBe(wantedData.Vote_0);
                expect(res.Deviation).toBe(wantedData.Deviation);
                done();
            }
            catch (error){
                done(error);
            }
        })

})