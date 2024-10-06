const express = require('express');
const { getExamples, createExample, updateExample ,deleteExample} = require('../controllers/controller');

const router = express.Router();

router.get('/', getExamples);
router.post('/', createExample);
router.put('/:id', updateExample);
router.delete('/:id', deleteExample); 

module.exports = router;
