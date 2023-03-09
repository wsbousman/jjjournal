import React from 'react'

function roll() {

  return (
    <section>
        <div className="label">
            <p>how was your roll?</p>
        </div>
        <div className="wrapper">
            <form>
                <input type="text" className="drillData" />     
            </form>
        </div>
    </section>
  )
}

export default roll