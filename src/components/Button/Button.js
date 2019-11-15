import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, disabled, ...rest }) => {
    const click = e => {
        if (!disabled) {
            onClick(e);
        }
    };

    return (
        <button onClick={click} disabled={disabled} {...rest}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    onClick: () => null,
    disabled: false,
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    rest: PropTypes.object,
    disabled: PropTypes.bool,
};

export default Button;
