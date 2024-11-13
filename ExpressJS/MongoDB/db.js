const {MongoClient} = require('mongodb')

let dbConnection;
module.exports = {
    connectToDb: (cb) =>{
        MongoClient.connect('mongodb://localhost:27017/BookStore')//asyn task
        .then((client) =>{
            dbConnection = client.db()
            return cb();
        })
        .catch(error =>{
            console.log(error);
            return cb(err)
        })
    },
    getDb: () => dbConnection
}