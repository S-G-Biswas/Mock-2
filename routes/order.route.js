const express = require("express")
const {auth} = require("../middleware/auth")
const { OrderModel } = require("../model/order.model")
const orderRouter= express.Router()

//for order book

orderRouter.post("/",async(req,res)=>{
    try {
        const order = new OrderModel(req.body)
        await order.save()
        res.send({"msg":"Order Successfull"})
    } 
    catch (error) {
        res.send({"Erroe":error})
    }
})

//Getting all the order 

orderRouter.get("/",async(req,res)=>{
    
    try {
         const order = await OrderModel.find()
         res.send({order})
    } 
    catch (error) {
        res.send({"error":error})
    }
})


module.exports={
    orderRouter
}