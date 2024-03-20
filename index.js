const express = require("express");
require("dotenv").config()
const {connection} =require("./config/db")
const {userRouter} = require("./routes/user.routes");
const { bookRouter } = require("./routes/book.route");
const { orderRouter } = require("./routes/order.route");
const app = express();
app.use(express.json());
app.use("/users",userRouter)
app.use("/books", bookRouter)
app.use("/orders",orderRouter)

//Public Routes

app.get("/", (req,res)=>{
    res.send({"msg":"This is home Route"})
})



///Server connection

app.listen(process.env.port,async ()=>{
    try {
         await connection
         console.log("connected to DB")
         console.log(`Server is ruuning at port ${process.env.PORT}`);
    } catch (error) {
        console.log(error)
    }
    
})