import React from 'react';
import PropTypes from 'prop-types';

export const ROW = 'ROW';
export const CARD = 'CARD';

const GiphyList = ({ giphs, as: As, mode = ROW }) => {
    return giphs.map(gif => <As key={gif.id} gif={gif} />);
};

GiphyList.propTypes = {
    mode: PropTypes.oneOf([ROW, CARD]),
};

export default GiphyList;
