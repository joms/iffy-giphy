import React from 'react';
import PropTypes from 'prop-types';

const GiphyCard = ({ gif }) => {
    return (
        <>
            card
            <img src={gif.images.preview_gif.url} />
        </>
    );
};

export default GiphyCard;
