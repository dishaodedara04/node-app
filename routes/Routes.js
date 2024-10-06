const express = require('express');
const { getExamples, createExample, updateExample } = require('../controllers/controller');

const router = express.Router();

router.get('/', getExamples);
router.post('/', createExample);
router.put('/:id', updateExample);

module.exports = router;
