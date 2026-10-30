const http = require("http")
const express = require('express')
const app = express()
const httpServer = http.createServer(app)

const PORT = 8080
require("dotenv").config()
const cors = require('cors')
app.use(cors({
    origin : [process.env.FRONTEND_URL, "http://localhost:5173"],
    credentials : true
}))

//* middleware for reading json data comes from body 
app.use(express.json())

// db call
const connectDB = require('./db/connectDB.js')
connectDB()

const initSocket = require("./config/socket.js")
initSocket(httpServer, process.env.FRONTEND_URL)


//* authentication route --> controller
const authController = require("./controllers/authController.js")
app.use('/', authController)

// httpServer.listen(PORT, "0.0.0.0", ()=>{
//     console.log(`server is running at port: http://0.0.0.0:${PORT}`);
// })

httpServer.listen(PORT,  ()=>{
    console.log(`server is running at port: http://localhost:${PORT}`);
})