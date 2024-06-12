const { HttpError } = require('../helpers');

const validateBody = schema => {
  const func = async (req, res, next) => {
    const validationResult = schema.validate(req.body);
    console.log('==========================', req.body);

    if (Object.keys(req.body).length === 0) {
      return next(HttpError(400, 'missing fields'));
    }

    if (validationResult.error) {
      return next(HttpError(400, validationResult.error.message));
    }

    next();
  };

  return func;
};

module.exports = { validateBody };
