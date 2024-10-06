const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  }, { timestamps: true });
  
  

module.exports = mongoose.model('Example', exampleSchema);
