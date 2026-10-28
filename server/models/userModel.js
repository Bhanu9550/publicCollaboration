const mongoose  = require("mongoose");

const userSchema =new mongoose.Schema({
    username: {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        unique : true,
        required : true,
        match : [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|ai)$/, "enter a valid email"]
    },
    password : {
        type : String,
        required : true
    }
},{
    timestamps : true
})

userSchema.index({email:1, username : 1},{unique: true})

const User = mongoose.model("User", userSchema)

module.exports = User