module.exports = {

  /**
   * @method index
   * @description Index.js template for elements
   * @param {string} name 
   * @returns {string}
   */
  index(name) {
    return `
import React, {Component} from 'react'

export default class ${name} extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('Element :: ${name}', this.props)
  }

  render() {
    return (
      <div className="${name.toLowerCase()}">${name}</div>
    )
  }
}
`
  },

  /**
   * @method style
   * @description Styletemplate for elements
   * @param {string} name 
   * @returns {string}
   */
  style(name) {
    return `
@import '~LESS/variables.less';

.${name.toLowerCase()} {

}
`
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