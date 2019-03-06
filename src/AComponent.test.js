import React from 'react'
import { shallow } from 'enzyme';
import BComponent from './BCompnent'
import AComponent from './ACompnent';
import {expect} from 'chai'
import Button from 'react-bootstrap/Button';


describe('<AComponent />', () => {
    it('renders BComponent', () => {
      const wrapper = shallow(<AComponent />);
      expect(wrapper.find(BComponent)).to.have.lengthOf(1);
    });
})


describe('<Button />', () => {
    it('renders Button', () => {
      const wrapper = shallow(<AComponent />);
      expect(wrapper.find(Button)).to.have.lengthOf(1);
    });
})