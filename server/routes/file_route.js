var express = require("express");
var router = express.Router();
const multer = require('multer');
var { upload } = require("../controllers/file");

var uploader = multer({
    storage: multer.diskStorage({}),
    limits: { fileSize: 500000 }
});

router.post("/upload", uploader.single("file"), upload);

module.exports = router;
