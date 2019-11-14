import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChange, value, placeholder, ...rest }) => (
    <input onChange={onChange} value={value} placeholder={placeholder} {...rest} />
);

Input.propTypes = {
    onchange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Input;
