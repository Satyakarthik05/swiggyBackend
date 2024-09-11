const vendorController = require('../Controller/vendorControllers')
const express = require('express');


const app = express.Router();

app.post('/register',vendorController.vendorRegister);
app.post('/login',vendorController.vendorLogin);

app.get('/all-vendors',vendorController.getAllVendors);
app.get('/single-vendor/:id',vendorController.getVendorById);
module.exports = app;

