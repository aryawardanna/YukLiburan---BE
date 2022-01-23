const multer = require('multer');
const path = require('path');
// import uuid from "uuid/v4";

// const storageMultiple = multer.diskStorage({
//   destination: function (req, file, cb) {
//     var dir = 'public/images';
//     if (!fs.existsSync(dir)) {
//       fs.mkdirSync(dir);
//     }
//     cb(null, dir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// Set storage engine
// const storage = multer.diskStorage({
//   destination: 'public/images',
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

const uploadSingle = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
      cb(new Error('File type is not supported'), false);
      return;
    }
    cb(null, true);
  },
}).single('image');

const uploadMultiple = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
      cb(new Error('File type is not supported'), false);
      return;
    }
    cb(null, true);
  },
}).array('image');

// // Check file Type
// function checkFileType(file, cb) {
//   // Allowed ext
//   const fileTypes = /jpeg|jpg|png|gif/;
//   // Check ext
//   const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
//   // Check mime
//   const mimeType = fileTypes.test(file.mimetype);

//   if (mimeType && extName) {
//     return cb(null, true);
//   } else {
//     cb('Error: Images Only !!!');
//   }
// }

module.exports = { uploadMultiple, uploadSingle };
