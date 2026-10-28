const express = require("express");
const authController = express.Router();

const User = require("./../models/userModel.js");

const fs = require("fs");
const path = require("path");


function readFiles(files) {
    let allFiles = {}
    files.forEach((file)=>{
        const fileName = path.resolve("myFiles", file);
        const data = fs.readFileSync(fileName, "utf-8");
        allFiles[file] = data
    })
    return allFiles
}

async function allFileNames() {
    const folderPath = path.resolve("myFiles");
    const files = await fs.promises.readdir(folderPath);
    return files;
}

authController.get("/getfiles", async(req, res) => {
  try {
    const files = await allFileNames();
    const filesObject = readFiles(files)
    res.status(200).json(filesObject)
  }catch (err) {
    console.log(err.message);
  }
});

authController.post("/signup", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      message: "User registered successfully",
      newUser: newUser,
    });
  } catch (err) {
    if (err.name == "ValidationError") {
      res.json({
        error: err.message, //* For regX or any related Schema validation error
      });
    } else {
      res.json({
        error: err.errorResponse.keyValue["username"]
          ? "username already exist, try new one"
          : "email already exist, please login",
      });
    }
  }
});

authController.post("/signin", async (req, res) => {
  const user_email = req.body.user_email;
  const password = req.body.password;

  const regX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|ai)$/;
  if (regX.test(user_email)) {
    const fetchData = await User.findOne({ email: user_email });
    res.json({
      message: fetchData
        ? fetchData.password == password
          ? "Login successful"
          : "Incorrect password"
        : "Email not found",
    });
  } else {
    const fetchData = await User.findOne({ username: user_email });
    res.json({
      message: fetchData
        ? fetchData.password == password
          ? "Login successful"
          : "Incorrect password"
        : "username not found",
    });
  }
});

module.exports = authController;
