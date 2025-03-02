const Joi = require("joi");
const httpStatus = require("http-status");

const createSchema = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
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

const loginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginValidator = (req, res, next) => {
  const { value, error } = loginSchema.validate(req.body, {
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

const updateUserSchema = Joi.object().keys({
  firstName: Joi.string().trim().min(1).optional(),
  lastName: Joi.string().trim().min(1).optional(),
  address: Joi.string().trim().min(1).optional(),
  city: Joi.string().trim().min(1).optional(),
  country: Joi.string().trim().min(1).optional(),
  bio: Joi.string().trim().min(1).optional(),
});

const updateUserValidator = (req, res, next) => {
  const { value, error } = updateUserSchema.validate(req.body, {
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

module.exports = { createValidator, loginValidator, updateUserValidator };
