const mongoose = require("mongoose");
const bycrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
require("dotenv").config();
mongoose.connect(process.env.MONGO)
.then((res)=>{
    console.log("connectionSuccessfull")
})
.catch((e)=>{
    console.log(e);
})

const mongooseSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ],
    userImage:[
        {
            image:{
                type:String,
                required:true
            }
        }
    ],
    photos:[
        {
            photo:{
                type:String,
                required:true
            }
        }
    ],
    descs:[
        {
            desc:{
                type:String
            }
        }
    ],
    memes:[
        {
            meme:{
                type:String,
                required:true
            }
        }
    ],
    texts:[
        {
            text:{
                type:String,
                required:true
            }
        }
    ],
 
})

//hashing password..
mongooseSchema.pre('save', async function(next){
    if(this.isModified('password')){
     this.password = await bycrypt.hash(this.password,12)
     this.cpassword = await bycrypt.hash(this.cpassword,12);
    }
    next();
 })
//generating token..


mongooseSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        return token;
    }catch(e){
        console.log(e);
    }
}

//saving image

mongooseSchema.methods.saveImage = async function(image){
    try{
      this.userImage= this.userImage.concat(image)
      await this.save();
      return this.userImage;
    }catch(e){
      console.log(e);
    }
  }

  //saving post

  mongooseSchema.methods.savePost = async function(text){
    try{
      this.texts= this.texts.concat(text)
      await this.save();
      return this.texts;
    }catch(e){
      console.log(e);
    }
  }

  //saving post image

  mongooseSchema.methods.savePhoto = async function(photo){
    try{
      this.photos= this.photos.concat([photo])
      await this.save();
      return this.photos;
    }catch(e){
      console.log(e);
    }
  }

  mongooseSchema.methods.savedescs = async function(desc){
    try{
      this.descs= this.descs.concat([desc])
      await this.save();
      return this.descs;
    }catch(e){
      console.log(e);
    }
  }

  //saving meme
  
  mongooseSchema.methods.saveMeme = async function(meme){
    try{
      this.memes= this.memes.concat([meme])
      await this.save();
      return this.memes;
    }catch(e){
      console.log(e);
    }
  }


const socialmodel = new mongoose.model('socialMedia',mongooseSchema)
module.exports = socialmodel;