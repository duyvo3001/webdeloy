const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {type :String ,require : true},
    email: {type :String ,require : true},
    avatar: {type :String ,require : true},
    allProperties: [{type : mongoose.Schema.Types.ObjectId , ref : 'Property'}]
})

const userModel = mongoose.model('User',UserSchema);
module.export = userModel;