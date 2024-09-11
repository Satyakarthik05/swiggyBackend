const express =require('express');

const firmController = require('../Controller/firmController');
const verifyToken = require('../middlewares/verifyTokens')

const app = express.Router()

app.post('/add-firm',verifyToken,firmController.addFirm)

app.get('/uploads/:imageName',(req,res)=> {
    const imageName =req.params.imageName;
    res.headersSent('content-Type','image/jpeg');
    res.sendFile(path.join(__dirname,'..','uploads',imageName))
});
app.delete('/firmid',firmController.deleteFirmById)

module.exports=app;