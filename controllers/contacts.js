// const fetch = (...args) =>
//   import('node-fetch').then(({ default: fetch }) => fetch(...args));

const { ctrlWrapper } = require('../helpers');

const sendEmail = require('../helpers/sendEmail');

const getAll = async (req, res) => {
  const currentTime = new Date();
  res.json(`Server time: ${currentTime}`);
};

const add = async (req, res) => {
  const { body } = req;

  const result = { ...body };

  await sendEmail(result);

  res.status(201).json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  add: ctrlWrapper(add),
};
