const mongoose = require("mongoose") 
const donutSchema = mongoose.Schema({ 
 donut_Name: String, 
 shop: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("Donut", 
donutSchema) 