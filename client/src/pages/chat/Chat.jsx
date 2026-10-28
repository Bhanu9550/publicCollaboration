import { useState } from "react";
import socket from "../../config/socket";
import { useEffect } from "react";

const Chat = () => {
  const [message, setMessage] = useState("")

  const [displayMsgs, setDisplayMessages] = useState([])

  useEffect(()=>{
    function handleReceiveMsgs(data){
      setDisplayMessages((prev)=> [...prev, {
      id: Math.random().toString(36).substring(2, 12),
      text : data,
      sender : "other"
    }])
    }

    socket.on("message:new", handleReceiveMsgs)

  },[])

  function sendMessage() {
    setDisplayMessages((prev)=> [...prev, {
      id: Math.random().toString(36).substring(2, 12),
      text : message,
      sender : "me"
    }])
    socket.emit("message:send", message)
    setMessage("")
  }

  return (
    <>
      <div style={{ margin: "50px" }}>
        <section style={{ height: "100px", border: "2px solid" }}>
          {
            displayMsgs.map((msg)=>{
              return <h4 key={msg.id} style={{textAlign: `${msg.sender==="me"? "right": "left" }`}}>{msg.sender} : {msg.text}</h4>
            })
          }
        </section>

        <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
          <input value={message} type="text" onInput={(event) => setMessage(event.target.value)} style={{width:"50%", height:"30px"}} />
          <button onClick={sendMessage} style={{width:"5%"}}>send</button>
        </div>
      </div>
    </>
  )
}

export default Chat;