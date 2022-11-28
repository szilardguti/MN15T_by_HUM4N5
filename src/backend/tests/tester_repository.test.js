const testdb = require('./test-db')
const repository = require('../api/tester_repository')

var connection;
var globalTesterId;

beforeAll(done => {
    return testdb.initalizeDatabase(done);
})

beforeEach(() => {
    connection = testdb.getConnection();
})

test('inserting a tester should return ID', done => {
    const testerData = { Age: 66, Gender: "f", Studies: "isi" }

    repository.postTester(testerData, connection, (result) => {
        try{
            expect(result.insertId).toEqual(expect.any(Number));
            expect(result.changedRows).toBe(0);
            globalTesterId = result.insertId;
            done();
        }
        catch (error){
            done(error);
        }
    })
})

test('tester should be able to do a test', done => {
    let testDate = { TestDate: "2022-11-17 16:56:09" };

    repository.postTesterDoneTest(globalTesterId, 1, testDate, connection, (result) => {
        try{
            expect(result).toBeTruthy();
            done();
        }
        catch (error){
            done(error);
        }
    })
})

test('tester should get empty list back when searching for highest deviation not done by tester', done => {

    repository.getHighestDeviationNotDoneByTester(globalTesterId, connection, (result) => {
        try{
            expect(result).toStrictEqual([]);
            done();
        }
        catch (error){
            done(error);
        }
    })
})

test('tester should return one test done with good ID', done => {
    
    repository.getDoneTestsIdByTesterId(globalTesterId, connection, (result) => {
        try{
            expect(result[0].ImageID).toBe(1);
            done();
        }
        catch (error){
            done(error);
        }
    })
})