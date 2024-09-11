const mongoose=require("mongoose");

const VendorSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
        
    },
    password:{
        type:String,
        required:true
    },
    firm:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"firm"
        }
    ]
})
const Vendor = mongoose.model('Vendor',VendorSchema);
module.exports = Vendor;