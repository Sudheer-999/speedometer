import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevSate => ({speed: prevSate.speed + 10}))
    }
  }

  onApplyBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevSate => ({speed: prevSate.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1>SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <p className="speed">Speed is {speed}mph</p>
        <p className="limit">Min Limit is 0mph, Max limit is 200mph</p>
        <div className="btn-container">
          <button className="btn1" type="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="btn2" type="button" onClick={this.onApplyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
