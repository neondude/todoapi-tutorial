//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connet to mongodb server');
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').find({
    //     _id : new ObjectID('59927401c499c71118b5e3b6')
    // }).toArray().then((docs)=>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs,undefined,2));
    //
    // },(err)=>{
    //     console.log("unable to fetch: ", err);
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log("Todos");
    //     console.log(`Todos count ${count}`);
    //
    // },(err)=>{
    //     console.log("unable to fetch: ", err);
    // });

    db.collection('Users').find({name : "sid"}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,4))
    });


    //db.close();
});
