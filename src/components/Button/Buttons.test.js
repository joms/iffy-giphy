import React from 'react';
import { shallow } from 'enzyme';
import Button, { Buttons } from '.';

describe('<Buttons>', () => {
    const wrapper = shallow(
        <Buttons>
            <Button>Yolo</Button>
            <Button>Swag</Button>
        </Buttons>
    );
    it('matches snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
