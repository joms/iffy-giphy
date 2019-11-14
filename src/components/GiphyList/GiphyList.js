import React from 'react';
import PropTypes from 'prop-types';

export const ROW = 'ROW';
export const CARD = 'CARD';

const GiphyList = ({ giphs, as: As, mode }) => {
    return (
        <div className={`giphylist giphylist-${mode.toLowerCase()}`}>
            {giphs.map(gif => (
                <As key={gif.id} gif={gif} />
            ))}
        </div>
    );
};

GiphyList.defaultProps = {
    mode: CARD,
};

GiphyList.propTypes = {
    mode: PropTypes.oneOf([ROW, CARD]),
};

export default GiphyList;
