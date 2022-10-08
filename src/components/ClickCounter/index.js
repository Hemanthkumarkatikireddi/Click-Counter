// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickCount = () => {
    this.setState(previous => ({count: previous.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="content-container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="spanned">{count}</span>
          times
        </h1>
        <p className="description">Click the button to increase the count</p>
        <button className="button" onClick={this.onClickCount} type="button">
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
