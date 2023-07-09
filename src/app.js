import express from "express"
const app = express()

//databse connction -mongodb
import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/test');



app.get('/instagram', (req, res) =>{
    res.send('you have visited instagram')
})
export default app;