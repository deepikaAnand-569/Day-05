const express=require('express');
const mongoose=require('mongoose');
const Todo=require('./model/todo');
const app=express();
app.use(express.json());
//mongodb://localhost:27017/TodoDB
mongoose.connect("mongodb://localhost:27017/TodoDB",{
    useNewUrlParser:true,useUnifiedTopology:true}
).then(()=>{console.log("connection established")}
).catch(err=>console.log("Error occured",err));
//app.use(express.json());
app.post("/dbadtodo",(req,res)=>{
    // res.send(rerq.body.taskname);
    const newTask=new Todo({taskname:req.body.taskname});
    newTask.save();
    res.send(newTask);
});
app.get("/dbfetchtodo",async (req,res)=>{
        console.tasks=await Todo.find()
        res.json(tasks);
});
// {    proname":"pen","prodesc":"cello pen" }
// create product mode => table name product and fields are
 //proname,prodesc,proprice. insert and fetch the data
app.listen(5000,function(){
    console.log("port listening on 5000");
})
