import React from 'react';
import { shallow } from 'enzyme';
import Input from '.';

describe('<Input>', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Input label="Hello, input" onChange={onChange} />);

    it('matches snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('handles input change', () => {
        wrapper.find('input').simulate('change', 'Hi thar!');
        expect(onChange).toHaveBeenCalledWith('Hi thar!');
    });
});
