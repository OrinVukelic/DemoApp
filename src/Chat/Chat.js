import React, {useState, useEffect} from 'react';
import Messages from './Messages'
import './Chat.scss';

function Chat() {

  const newMess = () => {
    let nmsg = {user: document.getElementById("usr").value, message: document.getElementById("box").value};
    nmsg.message = nmsg.message.replaceAll("\n","\\n");
    let xmlr = new XMLHttpRequest();
    xmlr.open("POST", "newmsg.php?usr=" + nmsg.user + "&msg=" + nmsg.message);
    xmlr.send();
  
    document.getElementById("box").value = "";
  }

  const updMess = () => {
    let xmlr = new XMLHttpRequest();
    xmlr.open("POST", "getmsgs.php");
    xmlr.onload = () => {
      if (xmlr.response !== mess) setMess(xmlr.response);
    }
    xmlr.send();
  }

  const checkEnter = (e) => {
    if (!e.shiftKey && e.charCode === 13) {
      e.preventDefault();
      newMess();
    }
  }

  const txtChange = () => {
    document.getElementById("box").rows = 2;
    if (document.getElementById("box").scrollHeight > 100) document.getElementById("box").rows = 5;
    else if (document.getElementById("box").scrollHeight > 76) document.getElementById("box").rows = 4;
    else if (document.getElementById("box").scrollHeight > 52) document.getElementById("box").rows = 3;
  }

  const pSubmit = (e) => {e.preventDefault();};

  const [mess, setMess] = useState("");

  useEffect(() => {
    updMess();
    const timer = setInterval(
      () => updMess(),
      500
    );
    return() => {clearInterval(timer)}
  }, []);

  useEffect(() => {
    if (document.getElementById("msgbox")) {
      document.getElementById("msgbox").scrollTop = document.getElementById("msgbox").scrollHeight;
    }
  });

  useEffect(() => {
    document.getElementById("chatbox").scrollIntoView();
  }, [document.getElementById("chatbox")]);

  return (
    <form id="chatbox" onSubmit={pSubmit}>
      <div id="msgbox">
        <Messages mess={mess} />
      </div>

      <div id="usrdiv">
        <p>User name: </p> 
        <input type="textbox" id="usr" />
      </div>
      <div id="msgdiv">
        <textarea id="box" rows="2" placeholder="Message" onKeyPress={checkEnter} onChange={() => txtChange()} />
        <input id="send" type="submit" value="->" onClick={() => newMess()} />
      </div>
    </form>
  );

}

export default Chat;