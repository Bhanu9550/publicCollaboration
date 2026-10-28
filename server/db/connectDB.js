const mongoose = require("mongoose");
// const { loadEnvFile } = require("node:process");
// loadEnvFile('./.env');
require("dotenv").config()

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.DBSTRING)
        console.log("DB successful connected");
    }catch(err){
        console.log(err.message);
    }
}

module.exports = connectDB