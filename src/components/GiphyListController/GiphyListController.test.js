import React from 'react';
import { mount } from 'enzyme';
import GiphyListController from '.';
import Button from '../Button';
import { ROW, CARD } from '../GiphyList';

describe('<GiphyListController>', () => {
    const onChange = jest.fn();
    const wrapper = mount(<GiphyListController onChange={onChange} />);
    it('matches snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('switches mode', () => {
        wrapper
            .find(Button)
            .at(0)
            .simulate('click');
        expect(onChange).toHaveBeenCalledWith(ROW);
        wrapper
            .find(Button)
            .at(1)
            .simulate('click');
        expect(onChange).toHaveBeenCalledWith(CARD);
    });
});
