import React from 'react'

function drill() {

  return (
    <section>
        <div className="wrapper">
            <form>
                <label for="drillData" className="label">what did you drill today?</label>
                <br></br>
                <input type="text" className="drillData" />     
            </form>
        </div>
    </section>
  )
}

export default drill