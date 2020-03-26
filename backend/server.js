const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
//Import Routes
const productsRoute = require('./routes/products');

dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
()=> console.log('Connected to DB'));

//Middleware (parser)
app.use(express.json());

//cors
app.use(cors());

//Route middlewares
app.use('/', productsRoute);


app.listen(3000, ()=> console.log('Server Up and running on 3000'));