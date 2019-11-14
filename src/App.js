import React, { useState, useEffect } from 'react';
import './styles/styles.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import * as giphyFetch from './utils/giphyFetch';
import GiphyList, { ROW } from './components/GiphyList';
import { GiphyRow, GiphyCard } from './components/GiphyListItem';
import GiphyListController from './components/GiphyListController';

function App() {
    const [searchString, setSearchString] = useState('');
    const [searchResult, setSearchResult] = useState({
        data: [],
        meta: {},
        pagination: {},
    });
    const [error, setError] = useState(null);
    const [mode, setMode] = useState();

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
                <div>
                    <input
                        type="text"
                        value={searchString}
                        onChange={e => setSearchString(e.target.value)}
                        placeholder="Search"
                    />
                </div>
                <h2>IFFY-GIPHY</h2>
                <div>
                    <GiphyListController onChange={_mode => setMode(_mode)} />
                </div>
            </header>
            <main>
                <GiphyList giphs={searchResult.data} mode={mode} as={mode === ROW ? GiphyRow : GiphyCard} />
            </main>
            <footer>Powered By GIPHY</footer>
        </div>
    );
}

export default App;
