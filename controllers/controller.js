const Example = require('../models/model');


const getExamples = async (req, res) => {
  try {
    const examples = await Example.find();
    res.status(200).json(examples);
  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createExample = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newExample = new Example({ name, description });
    await newExample.save();
    res.status(201).json(newExample);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const updateExample = async (req, res) => {
  const { id } = req.params;
  const { name, description, status } = req.body;

  try {
    const updatedExample = await Example.findByIdAndUpdate(id, { name, description, status }, { new: true });
    if (!updatedExample) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(updatedExample);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getExamples, createExample, updateExample };
