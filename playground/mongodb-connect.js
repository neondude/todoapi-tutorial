//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connet to mongodb server');
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').insertOne({
    //     text : 'Somethin to do',
    //     completed : false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo: ',err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops,undefined , 4));
    // });

    // db.collection('Users').insertOne({
    //     name : 'sid',
    //     age : 22,
    //     location : "chennai"
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to inser users: ',err);
    //     }
    //
    //     console.log(result.ops[0]._id.getTimestamp());
    //
    // });


    db.close();
});
