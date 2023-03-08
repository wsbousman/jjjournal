import React from 'react'

function drill() {

  return (
    <section>
        <div className="label">
            <p>what did you drill today?</p>
        </div>
        <div className="wrapper">
            <form>
                <input type="text" className="drillData" />     
            </form>
        </div>
    </section>
  )
}

export default drill