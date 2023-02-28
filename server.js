const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8000   
const connectMGDB = require('./services/connectDB.js');
const userRouter = require('./routes/user.routes.js');
const propertyRouter = require('./routes/property.routes.js');

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api/v1/users', userRouter)
app.use('/api/v1/properties',propertyRouter)
const startServer = async() =>{
    try{
        console.log('Starting');
        connectMGDB(process.env.MONGO_URL)
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    }catch(error){

    }
}
startServer();