import React from 'react';
import PropTypes from 'prop-types';

const GiphyRow = ({ gif }) => {
    return <img src={gif.images.preview_gif.url} />;
};

export default GiphyRow;
