import React, {useState, useEffect} from 'react';
import './Drawing.scss';

function Drawing() {

  const iclick = () => {
    let canvas = document.getElementById("dcanvas");
    if (canvas.getContext) {
      let c2d = canvas.getContext('2d');
      c2d.beginPath();
    }
    if (!drawon) setDrawOn(true);
  }

  const draw = (e) => {
    let canvas = document.getElementById("dcanvas");
    if (canvas.getContext) {
      let c2d = canvas.getContext('2d');

      if (drawon && e.buttons === 1) {
        let cpos = canvas.getBoundingClientRect();
        let mx = e.clientX - cpos.left, my = e.clientY - cpos.top;
        
        c2d.lineTo(mx, my);
        c2d.stroke();
        c2d.beginPath();
        c2d.moveTo(mx, my);
      }

    }
  }

  const tap = () => {
    let canvas = document.getElementById("dcanvas");
    if (canvas.getContext) {
      let c2d = canvas.getContext('2d');
      c2d.beginPath();
    }
    if (!drawonm) setDrawOnM(true);
  }


  const drawM = (e) => {
    let canvas = document.getElementById("dcanvas");
    if (canvas.getContext) {
      let c2d = canvas.getContext('2d');

      if (drawonm) {
        let cpos = canvas.getBoundingClientRect();
        let tx = e.touches[0].clientX - cpos.left, ty = e.touches[0].clientY - cpos.top;
        
        c2d.lineTo(tx, ty);
        c2d.stroke();
        c2d.beginPath();
        c2d.moveTo(tx, ty);
      }

    }
  }

  const clearImage = () => {
    let canvas = document.getElementById("dcanvas");
    if (canvas.getContext) {
      let c2d = canvas.getContext('2d');

      c2d.beginPath();
      c2d.rect(0, 0, 320, 480);
      c2d.fillStyle = "white";
      c2d.fill();
      c2d.beginPath();
    }
  }

  const exportImage = () => {
    setImage(document.getElementById("dcanvas").toDataURL('image/png').replace("image/png", "image/octet-stream"));
  }

  const [drawon, setDrawOn] = useState(false);
  const [drawonm, setDrawOnM] = useState(false);
  const [imglink, setImage] = useState("");

  useEffect(() => {
    if(drawonm) document.documentElement.style.overflow = 'hidden';
    else document.documentElement.style.overflow = 'auto';
  }, [drawonm]);

  useEffect(() => {
    if (document.getElementById("linkdiv")) {
      if (imglink !== "") document.getElementById("linkdiv").innerHTML = "<a href=" + imglink + " download=\"drawing.png\">Click here to download your image</a>";
      else document.getElementById("linkdiv").innerHTML = "";
    }
  }, [imglink]);

  useEffect(() => {
    clearImage();
    document.getElementById("drawbox").scrollIntoView();
  }, [document.getElementById("drawbox")]);

  return(
    <div id="drawbox">
      <canvas id="dcanvas" width="320" height="480" 
      onMouseDown={iclick} onMouseUp={() => {if (drawon) setDrawOn(false)}} onMouseMove={draw} onMouseLeave={() => {if (drawon) setDrawOn(false)}}
      onTouchStart={tap} onTouchEnd={() => {if (drawonm) setDrawOnM(false)}} onTouchMove={drawM} onTouchCancel={() => {if (drawonm) setDrawOnM(false)}}
      >Your browser does not support canvas function.</canvas>
      <button id="clear" onClick={clearImage}>Clear</button>
      <button id="export" onClick={exportImage}>Export image</button>
      <div id="linkdiv"></div>
    </div>
  );
}

export default Drawing;