const multer  = require('multer');
const mkdirp = require('mkdirp');

const uploadImage = (type) => {
    // console.log('Day la log request ');
    // console.log(req);
    const made = mkdirp.sync(`./public/images/${type}`);
    // const made = mkdirp.sync(`./public/images/avatar`);
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, `./public/images/${type}`);
        // cb(null, `./public/images/avatar`);
        },
        filename: function (req, file, cb) {
          cb(null, Date.now() + '_' + file.originalname);
        }
    })
      
    const upload = multer({ 
        storage: storage,
        fileFilter: function (req, file, cb) {
            if(['.png', '.jpg'].includes(file.originalname.slice(-4))) {
                cb(null, true)
            }
            else {
                cb(new Error('file khong hop le'))
            }
        }
    });

    return upload.single(type);

    
}

module.exports = {
    uploadImage,
}