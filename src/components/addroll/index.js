import React from 'react'
import RollInput from '../rollinput/index.js';
export default class addRoll extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      rolls: <RollInput />
    }
  }

  handleButtonClick = (event) => {

    event.preventDefault();

    this.setState({
      rolls: this.state.rolls + 
      <RollInput />
    })
  }

  render() {

    return (
      <section>
          <div className="wrapper">
            <div>{this.state.rolls}</div>
          </div>
          <div className="wrapper">
            <form>
              <button onClick={this.handleButtonClick} className="button">add roll</button>
            </form>
          </div>
      </section>
    )
  }
}