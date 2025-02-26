const httpStatus = require("http-status");
const { verifyToken } = require("../helper/token");
const { jwt } = require("../config/config");

const authentication = async (req, res, next) => {
  try {
    const token = req.cookies.auth;
    if (!token) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        message: "Phiên đăng nhập đã hết hạn hoặc không hợp lệ",
        success: false,
      });
    }

    const decoded = await verifyToken(token, jwt.secret);

    req.user = decoded;
    next();
  } catch (error) {
    console.error("Lỗi tạo bài viết:", error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      success: false,
    });
  }
};

module.exports = authentication;
