import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
//import './style.less'

export default class Link extends Component {
  constructor(props) {
    super(props)
  }

  parseTo(to) {
    let parser = document.createElement('a');
    parser.href = to;
    return parser;
  }

  isInternal(to) {
    if(to.indexOf("://")=== -1) return true;
    const toLocation = this.parseTo(to);
    return window.location.hostname === toLocation.hostname;
  }

  render() {
    const {to, children, className, activeClassName} = this.props;
    const isInternal = this.isInternal(to);
    if(to === '') {
      return <div className={className}>{children}</div>
    } else if (isInternal) {
      return <NavLink className={className} activeClassName={activeClassName} to={to}>{children}</NavLink>
    } else {
      return <a href={to} className={className} target="_blank">{children}</a>
    }
  }
}