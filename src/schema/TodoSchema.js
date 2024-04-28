const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    className:{
        type:String,
        required:true
    },
    classTime:{
        type:Number,
        required:true
    }
});

const Todo = mongoose.model('Todo',userSchema);

module.exports = Todo;