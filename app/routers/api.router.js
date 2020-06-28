let express = require('express');
let router = express.Router();
let upload = require('../config/multer.config.js');
 
const fileWorker = require('../controllers/file.controller.js');

router.get('/index', function(req, res) {
    res.json({msg:'api index'});
});

//file apis
router.post('/file/upload', upload.single('file'), fileWorker.uploadFile);
 
router.get('/file/info', fileWorker.listAllFiles);
 
router.get('/file/:id', fileWorker.downloadFile);

//products apis

 
module.exports = router;