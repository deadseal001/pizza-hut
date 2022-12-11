const { Schema, model } = require('mongoose');
const dateFormate=require('../utils/dateFormat');


const PizzaSchema =new Schema(
    {
        pizzaName: {
            type:String
        },
        createdBy: {
            type:String
        },
        createdAt: {
            type:Date,
            default: Date.now,
            get:(createdAtVal)=>dateFormate(createdAtVal)
        },
        size: {
            type: String,
            default: 'Large',
        },
        toppings: [],
        comments:[
            {
                type:Schema.Types.ObjectId,
                ref:'Comments'
            }
        ],
    },
    {
        toJSON:{
            virtuals:true,
            getters: true
        },
        id: false
    }
);

//get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function(){
    return this.comments.length;
})

//create the Pizza model using the PizzaSchema
const Pizza =model('Pizza', PizzaSchema);
//export the Pizza model
module.exports=Pizza;