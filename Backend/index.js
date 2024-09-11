const express = require('express');
const mongoose = require('mongoose');
const dotEnv = require("dotenv");
const vendorRoutes = require('./routes/vendorRoutes');
const bodyParser =require('body-parser');
const firmRotes=require('./routes/firmRoutes')
const productRoutes= require('./routes/productRoutes')
const path = require('path');
const app = express();
app.use(bodyParser.json())
app.use(express.json());

dotEnv.config();


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> 
    console.log("mongodb connected successfully")
).catch((error)=> console.log(error));

app.use('/vendor',vendorRoutes);
app.use('/firm',firmRotes);
app.use('/product',productRoutes);
app.use('/uploads',express.static('uploads'));
app.listen(3000,()=> {
    console.log("Server is running")
})