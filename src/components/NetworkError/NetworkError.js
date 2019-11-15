import React from 'react';
import PropTypes from 'prop-types';

const NetworkError = ({ error }) => (
    <h1>
        Error {error.status}: {error.message}
    </h1>
);

NetworkError.propTypes = {
    error: PropTypes.shape({
        message: PropTypes.string,
        ok: PropTypes.bool,
        status: PropTypes.number,
        statusText: PropTypes.string,
    }).isRequired,
};

export default NetworkError;
