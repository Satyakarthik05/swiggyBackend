const mongoose= require('mongoose');

const FirmSchema = new mongoose.Schema({
    firmName:{
        type:String,
        unique:true,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    category:{
        type:[
            {
            type:String,
            enum:['veg','non-veg']
            }
        ]
    },
    region:{
        type:[
            {
            type:String,
            enum:['southindian','north-indian','chineese','bakery']
            }
        ]
    },offer:{
        type:String
    },
    image:{
        type:String
    },
    vendor:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"vendor"

        }
    ],
    products:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
        }
    ]
})

const Firm = mongoose.model("firm",FirmSchema);
module.exports=Firm;