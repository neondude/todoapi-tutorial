const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5992ed214eae8d2720ff7d3a11";

// if(!ObjectID.isValid(id)){
//     console.log('id not valid');
// }

// Todo.find({
//     _id : id
// }).then((todos)=>{
//     console.log('Todos ',todos);
// });
//
// Todo.findOne({
//     _id : id
// }).then((todo)=>{
//     console.log('Todo ',todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('id not found');
//     }
//     console.log("Todo by id", todo)
// }).catch((e)=>{
//     console.log(e)
//
// });

User.findById("59928da405c93f1c4c2bbccd11").then((user)=>{
    if(!user){
        return console.log('id not found');
    }
    console.log("user by id", user)
}).catch((e)=>{
    console.log(e)

});
