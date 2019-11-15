import React from 'react';
import PropTypes from 'prop-types';

const GiphyCard = ({ gif }) => {
    return (
        <div className="giphycard">
            <a href={gif.url} target="blank">
                <span className="overlay">
                    {gif.title}
                    {gif.user && <> by {gif.user.display_name}</>}
                </span>
                <img src={gif.images.preview_gif.url} alt={gif.title} />
            </a>
        </div>
    );
};

export default GiphyCard;
