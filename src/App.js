import React, { useState, useEffect } from 'react';
import './styles/styles.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import * as giphyFetch from './utils/giphyFetch';
import GiphyList, { ROW } from './components/GiphyList';
import { GiphyRow, GiphyCard } from './components/GiphyListItem';
import GiphyListController from './components/GiphyListController';
import Input from './components/Input';
import NetworkError from './components/NetworkError';

let timeout = null;

function App() {
    const [searchString, setSearchString] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [searchResult, setSearchResult] = useState({
        data: [],
        meta: {},
        pagination: {},
    });
    const [error, setError] = useState(null);
    const [mode, setMode] = useState();

    const setIsSearchingTrue = () => setIsSearching(true);

    useEffect(() => {
        clearTimeout(timeout);
        if (searchString.length < 3) {
            return;
        }

        // use a timeout to prevent displaying loading before it's really necessary
        timeout = setTimeout(() => {
            setIsSearchingTrue();
        }, 100);

        giphyFetch
            .search({ q: searchString })
            .then(result => {
                clearTimeout(timeout);
                setIsSearching(false);
                setSearchResult(result);
            })
            .catch(err => {
                clearTimeout(timeout);
                setIsSearching(false);
                setError(err);
            });
    }, [searchString]);

    return (
        <div className="App">
            <header>
                <div>
                    <Input
                        type="text"
                        value={searchString}
                        onChange={e => setSearchString(e.target.value)}
                        placeholder="Search"
                    />
                </div>
                <h2>IFFY-GIPHY</h2>
                <GiphyListController onChange={_mode => setMode(_mode)} />
            </header>
            <main>
                {isSearching || error ? (
                    <div className="boo">
                        {isSearching ? <h1>Loading...</h1> : error ? <NetworkError error={error} /> : 'Uh oh'}
                    </div>
                ) : (
                    <GiphyList giphs={searchResult.data} mode={mode} as={mode === ROW ? GiphyRow : GiphyCard} />
                )}
            </main>
            <footer>Powered By GIPHY</footer>
        </div>
    );
}

export default App;
