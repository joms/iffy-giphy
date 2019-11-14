import React from 'react';
import PropTypes from 'prop-types';

const GiphyCard = ({ gif }) => {
    return (
        <div className="giphycard">
            <img src={gif.images.preview_gif.url} />
        </div>
    );
};

export default GiphyCard;
