const express = require('express');
const upload = require('../../middlewares/upload');
const ctrl = require('../../controllers/contacts');
const { validateBody } = require('../../middlewares/validateBody');
const { schemas } = require('../../models/contact');

const router = express.Router();

router.get('/', ctrl.getAll);

router.post(
  '/',
  upload.array('multiple_files', 6),
  validateBody(schemas.ContactAddSchema),
  ctrl.add
);

module.exports = router;
