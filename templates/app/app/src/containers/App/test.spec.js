
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './index';



describe('<App />', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(false);
  });

  it('Should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Container)).to.exist();
  });

});