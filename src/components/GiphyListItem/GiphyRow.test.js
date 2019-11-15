import React from 'react';
import { shallow } from 'enzyme';
import { GiphyRow } from '.';
import { giphyListMock } from '../GiphyList/GiphyList.test';

describe('<GiphyRow>', () => {
    it('matches snapshot', () => {
        const wrapper = shallow(<GiphyRow gif={giphyListMock[0]} />);
        expect(wrapper).toMatchSnapshot();
    });
});
