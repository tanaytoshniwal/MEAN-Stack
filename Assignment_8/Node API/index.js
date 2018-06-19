const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const url = 'mongodb://localhost:27017';
const dbName = 'increment';
const collection = 'number';
let db;
let num;

app.use(bodyParser.json());
app.use(cors());

MongoClient.connect(url, function(err, client){
    db = client.db(dbName);
});

app.post('/increment', function(req, res){
    db.collection(collection).find({}).toArray(function(err, r){
        num = r[0].data;
        db.collection(collection).updateOne({data: num}, {$set: {data: num+1}}, function(err, rr){
            res.json(num+1);
        });
    });
});

app.post('/read', function(req, res){
    db.collection(collection).find({}).toArray(function(err, r){
        num = r[0].data;
        res.json(num);
    });
});

app.post('/reset', function(req, res){
    db.collection(collection).find({}).toArray(function(err, r){
        num = r[0].data;
        db.collection(collection).updateOne({data: num}, {$set: {data: 0}}, function(err, rr){
            res.json(0);
        });
    });
});

app.listen(8080, function(){
    console.log('Server started at 8080');
})