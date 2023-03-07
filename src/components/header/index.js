import React from 'react'
// import { Link } from "react-router-dom";

function header() {

  return (
    <section>
        <div className="wrapper">
        <div style={{ zIndex: '1' }} className="fiveTriangles">
            <img style={{ width: 300, height: 300 }} src="https://i.imgur.com/Lh33evB.png" />
        </div>
        <div style={{ zIndex: '2' }} className="fiveTriangles2">
            <img style={{ width: 300, height: 300 }} src="https://i.imgur.com/Lh33evB.png" />
        </div>
        <div style={{ zIndex: '3' }} className="oss">
            <p>oss</p>
        </div>
        </div>
    </section>
  )
}

//style="position: absolute; z-index: 2;"></img>
//   <div style="position: relative; z-index: 1;">
//         <span id="overlay_text" style="position: relative; top: -10px; z-index: 3;">osss</span>


export default header