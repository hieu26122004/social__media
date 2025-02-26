const jwt = require("jsonwebtoken");

const generateToken = (data, secret, expire) => {
  return jwt.sign(data, secret, { expiresIn: expire });
};

const verifyToken = (token, secret) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        reject(
          new Error(
            "Phiên đăng nhập của bạn đã hết hạn hoặc không hợp lệ. Vui lòng đăng nhập lại."
          )
        );
      } else {
        resolve(decoded);
      }
    });
  });
};

module.exports = {
  generateToken,
  verifyToken,
};
