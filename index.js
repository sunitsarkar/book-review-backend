const express=require('express');
const app=express();
const port=8000;
const cors=require('cors');
const bodyParser=require('body-parser')
const mongoUrl="mongodb+srv://sunitsarkar:LwP8bgRq3VOKlHWI@cluster0.gxschpx.mongodb.net/?retryWrites=true&w=majority"
const mongoose=require('mongoose')


mongoose.set('strictQuery',false);
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connedted to databse')
})

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.listen(port,()=>{
    console.log(`server is running on port ${port} `)
})