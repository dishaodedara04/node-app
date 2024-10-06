const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const exampleRoutes = require('./routes/Routes');
require('dotenv').config();


// dotenv.config();
connectDB();

const app = express();

app.get(('/'),(req,res)=>{
    res.send("app is running fine")
  })
  
app.use(express.json());

app.use('/api/examples', exampleRoutes);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
