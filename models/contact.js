const Joi = require('joi');

const phoneRegexp = /^\+\d{12}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const ContactAddSchema = Joi.object({
  name: Joi.string().min(1).max(30).required().messages({
    'string.base': 'Name should be a text',
    'string.min': 'Name should be at least {#limit} characters long',
    'string.max': 'Name should not be more than {#limit} characters long',
    'any.required': 'Name is a required field',
  }),
  email: Joi.string().pattern(emailRegex).messages({
    'string.base': 'Email should be a text',
    'string.pattern.base': 'Enter a valid email format - example@email.com',
    'any.required': 'Email is a required field',
  }),
  phone: Joi.string().min(13).max(13).pattern(phoneRegexp).messages({
    'string.base': 'Phone number should be a string',
    'string.pattern.base': 'Enter a valid phone number format - +123456789012',
  }),
  message: Joi.string().min(3).max(500),
});

const schemas = {
  ContactAddSchema,
};

module.exports = {
  schemas,
};
