const express = require('express');

const {getALLusers , createUsers , getusersInfoByID} = require('../controller/userController');

const router = express.Router(); 

router.route('/').get(getALLusers)
router.route('/').post(createUsers)
router.route('/:id').get(getusersInfoByID)

module.exports = router ; 