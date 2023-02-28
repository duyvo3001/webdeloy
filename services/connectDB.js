const mongoose = require('mongoose');
const connectMGDB = (url) => {
    mongoose.set('strictQuery',true)

    mongoose.connect(url)   
        .then(() => console.log('MongoDB connected'))
        .catch((error) => console.error(error))
}
module.exports = connectMGDB