import React from 'react';
import PropTypes from 'prop-types';

const GiphyRow = ({ gif }) => {
    return (
        <div className="giphyrow">
            <img src={gif.images.preview_gif.url} />
        </div>
    );
};

export default GiphyRow;
