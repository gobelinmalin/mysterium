const express = require('express');
const router = express.Router();

const characters = require('./characters');
const mediums = require('./mediums');
const places = require('./places');
const weapons = require('./weapons');
const visions = require('./visions');


router.use('/characters', characters);
router.use('/mediums', mediums);
router.use('/places', places);
router.use('/weapons', weapons);
router.use('/visions', visions);


module.exports = router; 