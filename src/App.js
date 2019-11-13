import React, { useState, useEffect } from 'react';
import * as giphyFetch from './utils/giphyFetch';
import GiphyList, { CARD, ROW } from './components/GiphyList/GiphyList';
import { GiphyRow, GiphyCard } from './components/GiphyListItem';

function App() {
    const [searchString, setSearchString] = useState('');
    const [searchResult, setSearchResult] = useState({
        data: [],
        meta: {},
        pagination: {},
    });
    const [error, setError] = useState(null);
    const [mode, setMode] = useState(ROW);

    useEffect(() => {
        if (searchString.length < 3) {
            return;
        }

        giphyFetch
            .search({ q: searchString })
            .then(result => setSearchResult(result))
            .catch(err => setError(err));
    }, [searchString]);

    return (
        <div className="App">
            <header>
                <input
                    type="text"
                    value={searchString}
                    onChange={e => setSearchString(e.target.value)}
                    placeholder="Search"
                />
                <button onClick={() => setMode(mode === ROW ? CARD : ROW)}>{mode}</button>
            </header>
            <main>
                <GiphyList giphs={searchResult.data} mode={mode} as={mode === ROW ? GiphyRow : GiphyCard} />
            </main>
            <footer>Powered By GIPHY</footer>
        </div>
    );
}

export default App;
