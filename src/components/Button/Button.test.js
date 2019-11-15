import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

describe('<Button>', () => {
    const wrapper = shallow(<Button>Hello, world</Button>);
    it('matches snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders text', () => {
        expect(wrapper.text()).toEqual('Hello, world');
    });

    it('clicks', () => {
        const onClick = jest.fn();
        const clickWrapper = shallow(<Button onClick={onClick}>Hello, world</Button>);
        clickWrapper.simulate('click');
        expect(onClick).toHaveBeenCalled();
    });

    it('does not click when disabled', () => {
        const onClick = jest.fn();
        const clickWrapper = shallow(
            <Button disabled onClick={onClick}>
                Hello, world
            </Button>
        );
        clickWrapper.simulate('click');
        expect(onClick).not.toHaveBeenCalled();
    });
});
