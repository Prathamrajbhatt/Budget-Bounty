const mongoose=require('mongoose')

const transectionSchema = new mongoose.Schema({
    amount:{
        type:Number,
        required:[
            true,'amount is required'
        ],
        category:{
            type:String ,
            required:[true,'category is required']
        },
        reference:{
            type:String,
        },
        date:{
            type:String,
            required:[true,'date is required']
        },
        description:{
            type:String,
            required:[true,'description is required']
        },

    }
},{timestamps:true})

const transectionModel =mongoose.model('transactions',transectionSchema)