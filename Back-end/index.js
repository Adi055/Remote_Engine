const express=require("express");
const { connection } = require("./db");
const { userRouter } = require("./Routes/userRoutes");
const cors=require("cors");
const { developerRouter } = require("./Routes/developerRoutes");

const app=express();

app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use("/dev",developerRouter)



app.listen(8080,async()=>{
    try {
        await connection;
        console.log("connected to the db");
        console.log("server running at 8080");
    } catch (error) {
        console.log(error);
    }
})
