import React from 'react';
import { shallow } from 'enzyme';
import { GiphyCard } from '.';
import { giphyListMock } from '../GiphyList/GiphyList.test';

describe('<GiphyCard>', () => {
    it('matches snapshot', () => {
        const wrapper = shallow(<GiphyCard gif={giphyListMock[0]} />);
        expect(wrapper).toMatchSnapshot();
    });
});
