import React from 'react';
import PropTypes from 'prop-types';
import Button from '.';

const Buttons = ({ children }) => <div className="buttons">{children}</div>;

Buttons.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Buttons;
