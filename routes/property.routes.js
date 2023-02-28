const express = require('express');
const { model } = require('mongoose');

const {getALLproperties , getpropertiesDetails , createProperties , updateProperties} = require('../controller/propertyController');

const router = express.Router(); 

router.route('/').get(getALLproperties)
router.route('/:id').get(getpropertiesDetails)
router.route('/').post(createProperties)
router.route('/:id').patch(updateProperties)

module.exports = router;
    