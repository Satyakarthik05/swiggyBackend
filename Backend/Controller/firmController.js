const Firm =require('../models/Firm');
const Vendor =require('../models/Vendor');
const multer=require('multer');

const storage =multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,'uploads/');
    },
    filename:function(req,file,cb){
        cb(null.Date.now()+'-'+Path.extname(file.originalname));
    }
})
const upload =multer({storage:storage});


const addFirm = async(req,res)=> {
    try {
        const {firmName,area,category,region,offer}=req.body

        const image = req.file?req.file.filename:undefined;


        const vendor =await Vendor.findById(req.vendorId);

        if(!vendor){
            res.status(404).json({message:"Vendor not found"})
        }

        const firm = new Firm({
            firmName,area,category,region,offer,image,vendor:vendor._id
        })

        const savedFirm = await firm.save()
        vendor.firm.push(savedFirm);

        await vendor.save();

        return res.status(200).json({message:"Firm added successfully"})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Internal server error"})
    }

}

const deleteFirmById =async(req,res)=> {
    try {
        const firmId = req.params.firmId;

        const deletedfirm=await Firm.findByIdAndDelete(firmId);
        if(!deletedfirm){
            return res.status(404).json({error:"no product found"})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports ={addFirm:[upload.single('image'),addFirm],deleteFirmById}