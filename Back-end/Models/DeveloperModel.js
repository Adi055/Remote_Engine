const mongoose=require("mongoose");


const DeveloperSchema=({
firstName:{type:String,required:true},
lastName:{type:String,required:true},
phoneNumber: { type: String, required: true },
skills: [{type:String,enum:["Node","Java","React","Angular","Saas"]}],
  professionalExperiences: [{
    companyName: { type: String, required: true },
    skillsUsed: [{type:String,enum:["Node","Java","React","Angular","Saas"]}],
    startYear: { type: String, required: true },
    endYear: { type: String, required: true }
  }],
  educationalExperiences: [{
    degreeName: { type: String, required: true },
    schoolName: { type: String, required: true },
    startYear: { type: String, required: true },
    endYear: { type: String, required: true }
  }],
})


const DeveloperModel=mongoose.model("developer",DeveloperSchema);


module.exports={
    DeveloperModel
}