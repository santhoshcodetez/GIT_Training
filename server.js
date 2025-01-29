import express from "express";
import { listen } from '../api';
const PORT=4000;
listen(PORT,()=>{
    console.log("Port runs in "+PORT+" Sucessfully");
    console.log("Im Batman");
    
})
