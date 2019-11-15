import React from 'react';
import { shallow } from 'enzyme';
import NetworkError from '.';

describe('<NetworkError>', () => {
    const error = { status: 401, ok: false, statusText: '', message: 'No API key found in request' };
    const wrapper = shallow(<NetworkError error={error} />);
    it('matches snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the message', () => {
        expect(wrapper.text().includes(error.message)).toBeTruthy();
        expect(wrapper.text().includes(error.status)).toBeTruthy();
    });
});
