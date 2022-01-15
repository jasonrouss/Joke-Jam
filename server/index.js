import express from 'express';
//In order to get access to the post data we have to use body-parser. 
import bodyParser from 'body-parser';
//to protect files
import dotenv from 'dotenv';
//access our routes
//to enable cross origin resource sharing
import cors from "cors";
//mongoDb database
import mongoose from "mongoose";

import postRoutes from "./routes/jokes.js";


const app=express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//middleware
app.use("/jokes", postRoutes);




app.get('/',(req,res)=>{
    res.send("hello jokes api")
})

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.error(error.message));

