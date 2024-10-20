import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
    {
        orderPrice:{
            type:Number,
            required:true,
        },
        customer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        orderItems:{
            type:[],
            required:true,
        },
        category:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Category",
            required:true,
        },
    },
    {timestamps:true}
)

export const Order = mongoose.model("Order",orderSchema)