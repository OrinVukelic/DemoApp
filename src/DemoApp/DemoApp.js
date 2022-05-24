import React, { useState } from 'react';
import './DemoApp.scss';
import Tool from './Tool';
import ToolFrame from './ToolFrame';
import chatimg from './chatimg.webp'
import cconvertimg from './cconvertimg.webp'
import drawimg from './drawimg.webp'

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
      <div id="description" className="container">
        <p className="ind">Welcome! This is a simple demonstrational application which presents a few ways to use web development technologies. 
        Languages used to make this website include:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>SQL</li>
        </ul>
        <p>with the addition of:</p>
        <ul>
          <li>Sass</li>
          <li>Bootstrap</li>
          <li>ReactJS</li>
        </ul>
      </div>
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