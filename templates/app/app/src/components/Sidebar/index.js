import React, { Component } from 'react'
import { Link } from 'ELEMENT'
import { Container, Grid, Icon, Sidebar, Menu, Header } from 'semantic-ui-react'
import Model from './model'
import './style.less'

export default class AdminSidebar extends Component {
  constructor(props) {
    super(props)
  }

  subMenu(data) {

    if (data.menu) {
      return (
        <div className="submenu">
          {data.menu.map(v => 
            <Link key={v.title} to={v.link} activeClassName="active" className="sublink">
              <div className="submenu-link">
                {v.title}
              </div>
            </Link>
          )}
        </div>
      )
    }
  }

  render() {

    const large = this.props.global.device.match(/wide|large|computer|tablet/gi);

    return (
      <div className="sidebar">
        <div className="sidebar-fixed">
          {
            Model.links.map(v => 
              <Link to={v.link || ''} key={v.title} activeClassName="active" className="link">
                {v.underline && <hr/>}
                <span className="icon">
                  <Icon name={v.icon}  />
                </span>
                {large && <span>{v.title}</span>}
                {v.menu && large &&
                  <span className="icon-chevron pull-right">
                    <Icon name="chevron right" />
                  </span>}
                {this.subMenu(v)}
              </Link>
            )
          }
        </div>
      </div>
    )
  }
}