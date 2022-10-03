const mongoose=require("mongoose");


//connection creation and creating a new db
mongoose.connect("mongodb://localhost:27017/good")
.then(()=>console.log("connection successfull"))
.catch((err)=>console.log("Error"));

//schema
//A mongoose schema defines the structure of the document,
//default values,validators,etc

const playlistSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true},
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
});

////////
// A Mongoose model is a wrapper on the mongoose schema.
// A Mongoose schema defines the structure of the document,
//default values,validators,etc,,whereas a mongoose model
//provides an interface to the database for creating,querying,updating,deleting
//records,etc.

//create collections
const Playlist=new mongoose.model("Playlist",playlistSchema);


//create document or insert
const createDocument=async ()=>{
    try{
        const reactPlaylist=new Playlist({
            name:"mongoose",
            ctype:"database",
            videos:10,
            author:"thapa",
            active:true,
        
        })
        
        const result=await reactPlaylist.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
   
}
createDocument();
