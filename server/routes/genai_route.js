const { generateText } = require('../controllers/genai')
var express = require('express');
var router = express.Router();

router.post('/gentext', generateText);

module.exports = router
