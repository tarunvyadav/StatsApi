import express from "express"
import dotenv from 'dotenv';
import mongoose from "mongoose";
import postRouteFunc from "./routes/postRoute.js"
import statsRouteFunc from "./routes/statsRoute.js"
import allDataRouteFun from "./routes/allDataRoute.js"
const PORT = process.env.PORT  || 5000;

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(()=>console.log('connected'))
.catch(e=>console.log(e));



app.use('/',postRouteFunc)

app.use("/stats",statsRouteFunc)

//second api

app.use("/all",allDataRouteFun)



app.listen(PORT,()=>{
    console.log("hey  i am alive")
});