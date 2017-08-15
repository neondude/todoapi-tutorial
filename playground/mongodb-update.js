//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connet to mongodb server');
    }
    console.log('Connected to mongodb server');

    //findOneAndUpdate

    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID('5992835a49d93156049c53a7')
    // },{
    //     $set : {
    //         completed :true
    //     }
    // },{
    //     returnOriginal : false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('599275917093eb2114c10c75')
    },{
        $set : {
            name :"sid na"
        },
        $inc :{
            age : 1
        }
    },{
        returnOriginal :false
    }).then((result)=>{
        console.log(result);
    });



    //db.close();
});
