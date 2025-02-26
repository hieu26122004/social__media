const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    if (
      [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/gif",
        "image/webp",
      ].includes(file.mimetype)
    ) {
      cb(null, true);
    } else {
      cb(
        new Error("Vui lòng gửi file dưới dạng jpeg, png, jpg, gif, webp"),
        false
      );
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

module.exports = upload;
