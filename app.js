const express=require('express');
const path=require('path');
const fs=require('fs');
const app=express();
const port=8000;

app.use('/static',express.static('static')); //express specific stuff
app.use(express.urlencoded());

//pug specific stuff
app.set('view engine','pug'); //set the templete engine as pug
app.set('views',path.join(__dirname,'views')); //set the views directory 
 
//endpoints
app.get('/',(req,res)=>{
    const con="this is best dance page";
    const params={};
    res.status(200).render('index.pug',params);
});

//start the server
app.listen(port,()=>{
    console.log(`the apllication started succesfully on ${port}`);
});





