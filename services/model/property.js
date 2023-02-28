const mongoose = require('mongoose');
const PropertySchema = new mongoose.Schema({
    title: {type :String ,require : true},
    descripton: {type :String ,require : true},
    location: {type :String ,require : true},
    creator: [{type : mongoose.Schema.Types.ObjectId , ref : 'User'}]
})

const propertyModel = mongoose.model('Property',PropertySchema);
module.export = propertyModel;