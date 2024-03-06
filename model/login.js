const mongoose = require("mongoose")

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const adminlogin=mongoose.model("adminlogin",newSchema)


module.exports=adminlogin

