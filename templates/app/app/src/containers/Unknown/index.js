import React, { Component } from 'react'
import './style.less'

export default class Unknown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message || '404'
    }
  }

  render() {
    return (
      <div className="Unknown">
        <div className="unknown-title">{this.state.message}</div>
      </div>
    )
  }
}
