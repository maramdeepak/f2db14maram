const mongoose = require("mongoose") 
const donutSchema = mongoose.Schema({ 
    donut_Name: {type: String,required: [true, 'donut Name cannot be empty']},
    shop: {type: String,required: [true, ' donut shop name cannot be empty']},
    price: {type: Number,required: [true, 'dount price cannot be empty']}
}) 
 
module.exports = mongoose.model("Donut", donutSchema) 