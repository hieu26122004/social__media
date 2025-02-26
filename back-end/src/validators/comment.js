const Joi = require("joi");
const httpStatus = require("http-status");

const createSchema = Joi.object().keys({
  content: Joi.string().required(),
  postId: Joi.number().required(),
});

const create = async (req, res, next) => {
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

module.exports = { create };
