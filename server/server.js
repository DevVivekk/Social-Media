const express = require("express");
const app  = express();
require("dotenv").config();
const dotenv = require('dotenv');
const path =require("path")
dotenv.config({path: './.env'})
const cookieParser = require('cookie-parser')
const multer = require("multer");
const auth = require('./middleware/auth')
const bycrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
const cors = require("cors");
const socialmodel = require('./db')
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
const corsOptions = {
    origin:true,
    credentials:true
};
app.use(cors(corsOptions));
app.use(cookieParser())
app.listen(PORT);
console.log(PORT);
app.use("/uploads",express.static("./uploads"));

//multer configuration

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        cb(null, `image-${Date.now()}.${file.originalname}`)
    }
})

const isImage=(req,file,cb)=>{
    if(file.mimetype.startsWith("image")){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

const upload = multer({
    storage:storage,
    fileFilter:isImage
})

app.post('/register', async(req,res)=>{
    try{
    const {fullname,email,mobile,gender,password,cpassword} = req.body;
    console.log(req.body)
    if(!fullname || !email || !mobile || !gender || !password || !cpassword){
        res.status(401).json({message:"error"})
    }else{
            const userexists = await socialmodel.findOne({email:email})
            const userexists1 = await socialmodel.findOne({mobile:mobile})
            if(userexists || userexists1){
                res.status(401).json({messgae:"already used!"})
            }else{
                const savedata = new socialmodel({fullname,email,mobile,gender,password,cpassword});
                const savee = await savedata.save();
                console.log(savee);
                res.status(201).json({message:"success"})
            }
        }}catch(e){
            console.log(e);
            res.status(401).json(e);
        }
    }
)


app.post('/signin', async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            res.status(401).json({error:"empty"})
        }else{
            const findUser = await socialmodel.findOne({email:email})
            if(findUser){
                const isMatch = await bycrypt.compare(password,findUser.password)
                if(isMatch){
                    const token= await findUser.generateAuthToken()
                    console.log(token)
                    
                res.cookie("jwttoken",token,{
                    expires:new Date(Date.now()+ 25892000000),
                    HttpOnly:true
                });

                    res.status(201).json({message:"success"})
                }else{
                    res.status(401).json({error:"wrong password"})
                }
            }else{
                res.status(401).json({error:"error"})
            }
        }
    }catch(e){
        console.log(e);
        res.status(401).json(e)
    }
})

app.get('/image',auth,async(req,res)=>{
    res.send(req.check);
})

app.delete('/ddd',async(req,res)=>{
    const dele = await socialmodel.deleteMany({});
    res.status(201).json(dele);
 })

 //Uploading Photos...

 app.post("/registerimage",auth,upload.single("photo"),async(req,res)=>{
    const {filename} = req.file;
    console.log(filename);
    if(!filename){
        res.status(401).json({status:401,message:"fill all the data"})
    }
    try {
        const userdata = await socialmodel.findOne({_id:req.userid})
        if(userdata){
            const saveimg = await userdata.saveImage({image:filename})
            const saved = await userdata.save();
            console.log(saved);
            res.status(201).json("added img");
        }
    } catch (error) {
        res.status(401).json({status:401,error})
    }
});

app.post('/posttext',auth,async(req,res)=>{
    const {text} = req.body;
    if(!text){
        res.status(401).json({error:"enter text"})
    }
    try{
        const userdata = await socialmodel.findOne({_id:req.userid})
        if(userdata){
            const savetext = await userdata.savePost({text:text});
            const saved = await userdata.save();
            console.log(saved);
            res.status(201).json('added text');
        }
    }catch(e){
        console.log(e)
        res.status(401).json(e);
    }
})

app.get('/socialdata',async(req,res)=>{
    const data = await socialmodel.find({});
    res.status(201).json(data);
})

app.post("/photo",auth,upload.single('picture'),async(req,res)=>{
    try {
    const {filename} = req.file;
    const {desc} = req.body;
    if(!filename || !desc){
        res.status(401).json({status:401,message:"fill all the data"})
    }else{
        const userdata = await socialmodel.findOne({_id:req.userid})
        if(userdata){
            const saveimg = await userdata.savePhoto({photo:filename})
            const saveimgg = await userdata.savedescs({desc:desc})
            const saved = await userdata.save();
            console.log(saved);
            res.status(201).json("added img");
        }else{
            res.status(401).json('error')
        }
    } }catch (error) {
        res.status(401).json({status:401,error})
    }
})


app.post("/meme",auth,upload.single('picture'),async(req,res)=>{
    try {
    const {filename} = req.file;
    console.log(filename);
    if(!filename){
        res.status(401).json({status:401,message:"fill all the data"})
    }else{
        const userdata = await socialmodel.findOne({_id:req.userid})
        if(userdata){
            const saveimg = await userdata.saveMeme({meme:filename})
            const saved = await userdata.save();
            console.log(saved);
            res.status(201).json("added img");
        }else{
            res.status(401).json('error')
        }
    } }catch (error) {
        res.status(401).json({status:401,error})
    }
})

app.get('/logout',auth,(req,res)=>{
    res.clearCookie('jwttoken',{path:'/'});
    res.status(201).send('user logout')
})


////production stage
if(process.env.NODE_ENV ==="production"){
    app.use(express.static(path.join(__dirname,"./client/build")));
   app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./client','build','index.html'));
   })
}