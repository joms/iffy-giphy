import React from 'react';
import PropTypes from 'prop-types';
import Button, { Buttons } from '../Button';

const GiphyRow = ({ gif }) => {
    return (
        <div className="giphyrow">
            <img src={gif.images.preview_webp.url} alt={gif.title} />
            <div className="description">
                <h4>{gif.title}</h4>
                {gif.user && <span>Uploaded by {gif.user.display_name}</span>}
                {gif.source && (
                    <span>
                        Source:{' '}
                        <a href={gif.source} target="blank">
                            {gif.source_tld || gif.source}
                        </a>
                    </span>
                )}
            </div>
            <div className="actions">
                <Buttons>
                    <a href={gif.url} target="blank" title="Giphy">
                        <Button>
                            <i className="fas fa-external-link-alt" />
                        </Button>
                    </a>
                    <a href={gif.images.original.url} title="Original" target="blank">
                        <Button>
                            <i className="fas fa-link" />
                        </Button>
                    </a>
                </Buttons>
            </div>
        </div>
    );
};

GiphyRow.propTypes = {
    gif: PropTypes.object.isRequired,
};

export default GiphyRow;
