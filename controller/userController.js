const User = require('../services/model/user');

const getALLusers =async (req,res) =>{
    try {
        let name = "duyvo"
        let email = "duyvo1"
        let avatar = "duyvo2"
        const newUser = await User.create({name,email,avatar})
        res.status(200).json(newUser)        
    } catch (error) {
        res.status(500).json({message :error.message})
    }
};
const createUsers =async (req,res) =>{};
const getusersInfoByID =async (req,res) =>{};

module.export = {
    getALLusers , createUsers , getusersInfoByID
}