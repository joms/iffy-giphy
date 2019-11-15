import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import Button, { Buttons } from '../Button';

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
            <Buttons>
                {Object.entries(BUTTONS).map(([type, icon]) => (
                    <Button
                        key={type}
                        onClick={onClick(type)}
                        className={cx({ active: mode === type })}
                        title={`${type.toLowerCase()}-view`}
                    >
                        <i className={`fas fa-${icon}`} />
                    </Button>
                ))}
            </Buttons>
        </div>
    );
};

export default GiphyListController;
