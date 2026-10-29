const {Server} = require("socket.io")
const fs = require('fs')
const path = require("path");

let io = null;

function updateFile(data){
    const fileName = path.resolve("myFiles", data.file);
    fs.writeFileSync(fileName, data.fileData, "utf-8")
    return fs.readFileSync(fileName, "utf-8");
    
}

function initSocket(httpServer, Frontend_Origin){
    io = new Server(httpServer, {
        cors : {
            origin : Frontend_Origin,
            credentials : true
        }
    })

    io.on("connection", (socket)=>{
        console.log(socket.id)
        socket.on("message:send", (data)=>{
            socket.broadcast.emit("message:new", data)
        })

        socket.on("updateFile:Data", (data)=>{
            try{
                const updatedFileData = updateFile(data)

                io.emit("updateFile:Data", {
                    file : data.file,
                    fileData : updatedFileData
                })

            }catch(err){
                console.log(err.message)
            }
        })

    })

    return io;
}

module.exports = initSocket;