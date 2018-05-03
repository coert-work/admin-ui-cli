module.exports = {

  /**
   * @method index
   * @description Index.js template for containers
   * @param {string} name
   * @returns {string}
   */
  index(name) {
    return `
import React, { Component } from 'react'
// import ACTIONS from './actions'
// import { Container } from 'semantic-ui-react'
// import './style.less'

export default class ${name} extends Component {
  constructor(props) {
    super(props);
    // Object.assign(this, ACTIONS);
    // Object.keys(ACTIONS).forEach(v => { if (typeof this[v] === "function") this[v] = this[v].bind(this) });
    // this.state = {};
  }

  // componentDidMount() {
  //   this.populate(data => this.setState({ model: data }) )
  // }

  render() {
    return (<div>${name}</div>)
  }
}
`
  },

  /**
   * @method style
   * @description Style template for containers
   * @param {string} name 
   * @returns {string}
   */
  style(name) {
    return `
@import '~LESS/variables.less';

.${name} {

}
`
  },

  /**
   * @method api
   * @description API file template for sub-containers
   * @param {string} name 
   * @returns {string}
   */
  api(name) {
    return `
import REQ from 'MOD/Request'
import _ from 'lodash'

export default {

  getData(cb) {
    return REQ.get('/', data => {

      let rows = [];

      if (data.length > 0) {
        $.map(data, v => {
          
          rows.push({
            // id: v.id,
          })
        });
      }
      cb(rows);
    })
  }
}
`;
  },

  /**
   * @method actions
   * @param {string} name 
   */
  actions(name) {
    return `
import API from './api'

export default {
  populate(cb) { API.getData(cb) },

  // your_action() {}
}
`;
  },

  /**
   * @method test
   * @description Test file template for containers
   * @param {string} name 
   * @returns {string}
   */
  test(name) {
    return `
import React from 'react';
import { shallow } from 'enzyme';

import ${name} from './index';

describe('<${name} />', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(false);
  });
});
`
  }
}