module.exports = {

  /**
   * @method index
   * @param {string} name 
   * @description standard react / JS class Component
   * @returns {string}
   */
  index(name) {
    return `
import React, {Component} from 'react'
// import ACTIONS from './actions'
// import { Container } from 'semantic-ui-react'
import './style.less'

export default class ${name} extends Component {
  constructor(props) {
    super(props);
    // Object.assign(this, ACTIONS.actions);
    // Object.keys(ACTIONS.actions).forEach(v => { if (typeof this[v] === "function") this[v] = this[v].bind(this) });
    // this.state = {}
  }

  render() {
    return (
      <div className="${name}">${name}</div>
    )
  }
}
`
  },

  /**
   * @method pureComponent
   * @param {string} name 
   * @description Performance-optimized version of React.Component. Doesn’t rerender if props/state hasn’t changed.
   * @returns {string}
   */
  pureComponent(name) {
    return `
import React from 'react'

export default class ${name} extends React.PureComponent {

}
`
  },

  /**
   * @method functionComponent
   * @param {string} name 
   * @description Functional components have no state. Also, their props are passed as the first parameter to a function.
   * @returns {string}
   */
  functionComponent(name) {
    return `
export default = function ${name} (props) {
  return <div className="${name}"></div>
}
`
  },

  /**
   * @method style
   * @description Style template
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
   * @method action
   * @description Actions file template
   * @returns {string}
   */
  action() {

    return `
import API from './api'

export default {

  getData() {
    return API.populate('todo - endpoint')
  }
}
`
  },

  /**
   * @method api
   * @description API file template
   * @param {string} name
   * @returns {string}
   */
  api(name) {

    return `
import REQ from 'MOD/request'

export default {

  populate(cb) {
    REQ.get('/url', data => {
      let rows = [];
      data.map(v => {
        rows.push({
          // id: v.id,

        });
      });
      cb({rows})
    });
  }
}
`;
  },

  /**
   * @method test
   * @description Test file template
   * @param {string} name
   * @returns {string}
   */
  test(name) {
    return `
import React from 'react';
import { shallow } from 'enzyme';
import ${name} from './index'

describe('${name} />', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(true);
  });
});
`
  }
}