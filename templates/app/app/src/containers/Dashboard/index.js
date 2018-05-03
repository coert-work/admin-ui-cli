import React, { Component } from 'react'
import ACTIONS from './actions'
import { Grid, Container } from 'semantic-ui-react'
import './style.less'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, ACTIONS);
    Object.keys(ACTIONS).forEach(v => { if (typeof this[v] === "function") { this[v] = this[v].bind(this) }});

    // Set Nav
    props.setGlobalState({
      nav: {
        title: 'Dashboard',
        icon: 'home'
      },
    });
    this.state = {}
  }

  // componentDidMount() {
  //   this.populate(res => console.log(res) );
  // }

  render() {
    return (
      <Container fluid className={`Dashboard ${this.props.global.animationIn}`}>
          Dashboard
      </Container>
    )
  }
}