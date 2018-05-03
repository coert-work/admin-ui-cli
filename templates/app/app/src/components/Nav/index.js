import React, { Component } from 'react'
import { Button, Icon, Grid } from 'semantic-ui-react'
import { Logo } from 'ELEMENT'
import './style.less'

/**
 * @class Nav
 * @description Component => Navbar
 */
export default class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid columns="4" className="nav clearall">
        <Grid.Row style={{padding: '0'}}>

          <Grid.Column mobile="8" tablet="4" computer="3" className="clearall">
            <div className="logo">
              <Logo {...this.props} />
            </div>
          </Grid.Column>

          <Grid.Column only="tablet" tablet="6" computer="6" className="clearall">
            <div className="title">
              <span className="icon lg">
                <Icon name={this.props.nav.icon}/>
              </span>
              <span className="title-text">{this.props.nav.title}</span>
            </div>
          </Grid.Column>
          
          <Grid.Column mobile="8" tablet="6" computer="7" className="clearall">
            <div className="user-link pull-right">
              <span className="user-text">Hi, {this.props.user.name}</span>
              <span className="icon sm">
                <Icon name="user circle"/>
              </span>
            </div>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    )
  }
}