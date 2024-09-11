const express =require('express');

const productController = require('../Controller/productController');


const app = express.Router()

app.post('/add-product/:firmId',productController.addProduct)
app.get('/:firmId/products',productController.getProductByFirm);

app.get('/uploads/:imageName',(req,res)=> {
    const imageName =req.params.imageName;
    res.headersSent('content-Type','image/jpeg');
    res.sendFile(path.join(__dirname,'..','uploads',imageName))
});

app.delete('/productId',productController.deleteProductById)

module.exports=app;