const {Server} = require("socket.io")

let io = null;

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
    })

    return io;
}

module.exports = initSocket;