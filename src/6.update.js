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
///count() countDocuments()  sort(1,-1)

const getDocuments=async()=>{
    try{
        const result=await Course.find({active:true})
        .select({course:1})
        .sort({course:-1});
        // .limit(5)
        // .count();
        console.log(result);
    }catch(err){
        console.log("Error");
    }
    
}
// getDocuments();
//updateOne ,findByIdAndUpdate
const updateDocuments=async (_id)=>{
    try{
        const result=await Course.findByIdAndUpdate({_id},{
            $set:{course:"french"}
        });
        console.log(result);
    }catch(err){
        console.log(err);
    }

}

updateDocuments("6329575f984c5fdde5060dc2")

