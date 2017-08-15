//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connet to mongodb server');
    }
    console.log('Connected to mongodb server');

    //delete many
    // db.collection('Todos').deleteMany({text : "eat lunch"}).then((result)=>{
    //     console.log(result);
    // });


    //deletOne
    // db.collection('Todos').deleteOne({text : 'eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed :false}).then((result)=>{
    //     console.log(result);
    // });

    //db.collection('Users').deleteMany({name : 'sid'});

    db.collection('Users').findOneAndDelete({
        _id : new ObjectID('599275c405cb2122c4b7af3a')
    }).then((results)=>{
        console.log(JSON.stringify(results,undefined,4));
    });




    //db.close();
});
