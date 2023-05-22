const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const MetaplexController = require('../Controller/Metaplex.controller')

router.get('/nfts',MetaplexController.fetchOwnerNFTs)

module.exports = router;