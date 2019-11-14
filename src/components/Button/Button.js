import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, ...rest }) => (
    <button onClick={onClick} {...rest}>
        {children}
    </button>
);

Button.defaultProps = {
    onClick: () => null,
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    rest: PropTypes.object,
};

export default Button;
