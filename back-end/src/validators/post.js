const Joi = require("joi");
const httpStatus = require("http-status");
const { VISIBILITY } = require("../config/constant");

const createSchema = Joi.object().keys({
  description: Joi.string().required(),
});

const createValidator = (req, res, next) => {
  const { value, error } = createSchema.validate(req.body, {
    allowUnknown: true,
    errors: { wrap: { label: "" } },
  });
  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(", ");
    return res.status(httpStatus.BAD_REQUEST).json({
      message: errorMessage,
      success: false,
    });
  }

  req.body = value;
  next();
};

module.exports = { createValidator };
