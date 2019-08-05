var express = require('express');
var ImageRouter = express.Router();
const multer = require('multer');
var fs = require('fs');
var request = require('request');
const mime = require('mime');


var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, __dirname+'/public/uploads');
    },
    filename: function (req, file, callback) {
      callback(null, 'uploaded' + '-' + Date.now() + '.' + mime.getExtension(file.mimetype));
    }
  });


  const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        // rejects storing a file
        cb(null, false);
    }
  }

var upload = multer({ 
    storage : storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
}).single('file');

ImageRouter.route("/upload-photo")
.post( (req, res, next) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        const fileLocalUrl =  "uploads/"+req.file.filename;
        
    return res.status(200).send({fileLocalUrl})
    });
});

//Node.js Function to save image from External URL.
function saveImageToDisk(url, localPath) {
    var file = fs.createWriteStream(localPath);
    var request = https.get(url, function(response) {
    response.pipe(file);
    });
  }
  
  var download = function(uri, filename, callback){
    let stream = request({url:uri, encoding: null, forever:true}, function (err, response, body) {
    }).pipe(fs.createWriteStream(filename));
    stream.on('finish', callback);
  
  };

ImageRouter.route("/url-photo")
.post( (req, res, next) => {

    let filepath=__dirname+"/public/uploads/";
    let filename='zdjotko'+Date.now()+'.jpg';
    //saveImageToDisk(req.body.url,filename);
    download(req.body.url, filepath+filename , function(){

      //const fileLocalUrl = req.get('Referrer') + "uploads/" + filename;
      const fileLocalUrl =  "uploads/" + filename;
      return res.status(200).send({ fileLocalUrl });
     
  });
});   

module.exports = ImageRouter;