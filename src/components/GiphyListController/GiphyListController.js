import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import Button from '../Button';

import { CARD } from '../GiphyList';

const BUTTONS = {
    ROW: 'list',
    CARD: 'th',
};

const GiphyListController = ({ onChange }) => {
    const [mode, setMode] = useState(CARD);

    useEffect(() => {
        onChange(mode);
    }, [mode, onChange]);

    const onClick = _mode => e => setMode(_mode);

    return (
        <div className="giphylist-controller">
            {Object.entries(BUTTONS).map(([type, icon]) => (
                <Button onClick={onClick(type)} className={cx({ active: mode === type })}>
                    <i className={`fas fa-${icon}`} />
                </Button>
            ))}
        </div>
    );
};

export default GiphyListController;
