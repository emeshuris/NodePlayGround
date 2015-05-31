var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');


var asyncGetClient = function(server, port, dbName, callback){
    var mongoclient = new MongoClient(new Server(server, port), {native_parser: true});
    
    mongoclient.open(function(err, mongoclient) {
        if(err){
            console.log(err);
        }
        
        callback(mongoclient.db(dbName));
    });
};

var asyncGetAllInCollection = function(collectionName, callback){
    asyncGetClient("EMMMBP", 27017, "employeedb09", function(cb){
        cb.collection(collectionName).find().toArray(function(err, items) {
            callback(items);
            cb.close();
        });
    });
};

module.exports = {
    getCollection : function(collection, callback) {
        asyncGetAllInCollection(collection, function(cb){
            callback(cb);
        });
    }
};