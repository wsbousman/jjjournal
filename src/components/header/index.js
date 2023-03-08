import React from 'react'

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

export default header