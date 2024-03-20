const mongoose=require("mongoose")

const orderSchema=mongoose.Schema({
    user:{type:String, required:true},
    book:{type:String,required:true},
    totalAmount:{type:Number,required:true}
},{
    versionKey:false
})

const OrderModel = mongoose.model("orders",orderSchema)

module.exports={
    OrderModel
}