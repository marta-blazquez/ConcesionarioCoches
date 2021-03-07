let multer = require ('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage });

  module.exports = upload;
/*
  filename: (_req,file,cb)=>{
    const extension= file.originalname.slice(
        file.originalname.lastIndexOf(".")
    )
    console.log(extension)
    cb(null, new Date().valueOf() + extension)
}
*/