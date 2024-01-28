import express  from "express";

// create application
const app=express();

app.listen(5000,()=>{
    console.log("Server listening on port 5000!")
});