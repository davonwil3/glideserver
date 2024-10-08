const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

//mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000'], 
  credentials: true,
}));

  
//app.use('/api', airoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});