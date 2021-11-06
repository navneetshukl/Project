const express=require('express');
const parser=require('body-parser');
const app=express();

app.use(parser.urlencoded({extended: true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});


app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var resu=num1+num2;
    res.send("The result of operation is "+resu.toString());
})
app.listen(3000);
