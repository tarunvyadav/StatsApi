import mongoose from "mongoose";


const postSchema= new mongoose.Schema({
    id: {type:Number},
      dateOfSale:{type:String},
    title:{type:String},
    price:{type:Number},
    description:{type:String},
    category:{type:String},
    image:{type:String},
    sold:{type:Boolean},
   
})

const Post = mongoose.model("Post",postSchema)

export default Post;