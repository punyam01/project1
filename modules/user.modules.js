const mongoose = require("mongoose");

const userSchema =  new mongoose.Schema({}) 

const User = new mongoose.model("User", userSchema) 