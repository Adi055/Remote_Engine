const express = require("express");
const { DeveloperModel } = require("../Models/DeveloperModel");
const { auth } = require("../Middleware/auth");

const developerRouter = express.Router();


developerRouter.get("/", async (req, res) => {
    const { dev_ID } = req.query;
    try {
        console.log(dev_ID);
        if (!dev_ID) {
            const data = await DeveloperModel.find();
            res.send(data)
        }
        else {
            const data = await DeveloperModel.findById(dev_ID);
            
            res.send(data)
        }
    } catch (error) {
        res.send({ "error": error.message })
    }
})



developerRouter.get("/getdev",auth,async(req,res)=>{
    
    try {
        const data= await DeveloperModel.findOne({user:req.body.user}).populate("user")
        res.send(data)
    } catch (error) {
        res.send({ "error": error.message })
    }
})



developerRouter.post("/add", async (req, res) => {
    try {
        console.log("Received data:", req.body);
        const user = new DeveloperModel(req.body);
        await user.save();
        res.send({ "msg": "success",user })
    } catch (error) {
        res.send({ "error": error })
        
    }
})


developerRouter.patch("/update/:id",async(req,res)=>{
    const {id}=req.params;
try {
    await DeveloperModel.findByIdAndUpdate({_id:id},req.body);
    res.send({"msg":"id has been updated"})
} catch (error) {
    res.send({ "error": error })
}
})


developerRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try {
        await DeveloperModel.findByIdAndDelete({_id:id});
        res.send({"msg":"id has been deleted"})
    } catch (error) {
        res.send({ "error": error })
    }
})





module.exports = {
    developerRouter
}


