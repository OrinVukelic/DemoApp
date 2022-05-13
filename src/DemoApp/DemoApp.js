import React, { useState } from 'react';
import './DemoApp.scss';
import Tool from './Tool';
import ToolFrame from './ToolFrame';
import chatimg from './chatimg.png'
import cconvertimg from './cconvertimg.png'
import drawimg from './drawimg.png'

function DemoApp() {

  const changeTool = (ntool) => {
    if (ntool === state) setState("");
    else setState(ntool);
  }

  const [state, setState] = useState("");

  return(
    <div id="app">
      <div id="title">
        <h1>Demo project</h1>
      </div>
      <br />
      <div id="select" className="container">
        <h3>Choose one of the tools:</h3>
        <div className="row w-75 mx-auto">
          <Tool name="Chatroom"
            src={chatimg}
            onClick={() => changeTool("chat")} />
          <Tool name="Currency converter"
            src={cconvertimg}
            onClick={() => changeTool("cconvert")} />
          <Tool name="Drawing"
            src={drawimg}
            onClick={() => changeTool("draw")} />
        </div>
      </div>
      <br />
      <ToolFrame state={state} />
      <div id="footer">
        <h3>Created by Orin Vukelić</h3>
      </div>
    </div>
  );
  
}

export default DemoApp;