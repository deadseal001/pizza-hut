const { Schema, model } = require('mongoose');

const PizzaSchema =new Schema({
    pizzaNmae: {
        type:String
    },
    createdBy: {
        type:String
    },
    createdAt: {
        type:Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large',
    },
    topping: []
});

//create the Pizza model using the PizzaSchema
const Pizza =model('Pizza', PizzaSchema);
//export the Pizza model
module.exports=Pizza;