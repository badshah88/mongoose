const mongoose=require("mongoose");

//create new connection and db
mongoose.connect("mongodb://localhost:27017/newdb")
.then(()=>console.log("connection successfull")).catch((err)=>{
    console.log("err");
})

//create schema
const courseSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true},
    course:String,
    price:Number,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
});


//create model
const Course=new mongoose.model("Course",courseSchema);


//insertvalue
const createDocument=async()=>{
try{
    const freCourse=new Course({
        name:"rat",
        course:"frnech",
        price:100,
        active:true
    })
    const engCourse=new Course({
        name:"rat",
        course:"english",
        price:200,
        active:true
    })
    const spanCourse=new Course({
        name:"rat",
        course:"frnech",
        price:100,
        active:true
    })
    const chinCourse=new Course({
        name:"rat",
        course:"frnech",
        price:100,
        active:true
    })
    const result=await Course.insertMany([freCourse,engCourse,spanCourse,chinCourse]);
    console.log(result);
}catch(err)
{
    console.log(err);
}
}
// createDocument();
////////////////////////////////
//get data
//comparision operator($eq,$gt,$gte,$in,$lt,$lte,$ne,$nin)

const getDocuments=async()=>{
    const result=await Course.find({price:{$nin:[100,200]}}).select({price:1}).limit(5);
    console.log(result);
}


getDocuments();

