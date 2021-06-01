const router = require('express').Router();

const {
  getAllContact,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
} = require('./controller');

router.get('/', getAllContact);
router.get('/:id', getSingleContact);
router.get('/', createContact);
router.get('/:id', updateContact);
router.get('/:id', deleteContact);
