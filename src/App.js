import React, { useState, useEffect, useCallback } from 'react';
import './styles/styles.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import * as giphyFetch from './utils/giphyFetch';
import GiphyList, { ROW } from './components/GiphyList';
import { GiphyRow, GiphyCard } from './components/GiphyListItem';
import GiphyListController from './components/GiphyListController';
import Input from './components/Input';
import NetworkError from './components/NetworkError';
import Button from './components/Button';

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

    const loadGifs = (searchString, offset = 0) => {
        clearTimeout(timeout);
        if (searchString.length < 3) {
            return;
        }

        // use a timeout to prevent displaying loading before it's really necessary
        timeout = setTimeout(() => {
            setIsSearchingTrue();
        }, 100);

        giphyFetch
            .search({ q: searchString, offset })
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
    };

    useEffect(() => {
        loadGifs(searchString);
    }, [searchString]);

    return (
        <div className="App">
            <header>
                <Input
                    type="text"
                    value={searchString}
                    onChange={e => setSearchString(e.target.value)}
                    placeholder="Search"
                />
                <h2>IFFY-GIPHY</h2>
                <GiphyListController onChange={_mode => setMode(_mode)} />
            </header>
            <main>
                {isSearching || error ? (
                    <div className="boo">
                        {isSearching ? <h1>Loading...</h1> : error ? <NetworkError error={error} /> : 'Uh oh'}
                    </div>
                ) : (
                    <>
                        {searchResult.pagination.count && <div>Found {searchResult.pagination.total_count} gifs</div>}
                        <GiphyList giphs={searchResult.data} mode={mode} as={mode === ROW ? GiphyRow : GiphyCard} />
                        {searchResult.pagination.count < searchResult.pagination.total_count && (
                            <div className="load-controller">
                                <Button
                                    disabled={searchResult.pagination.offset < 25}
                                    title="Show previous 25 gifs"
                                    onClick={() =>
                                        loadGifs(
                                            searchString,
                                            searchResult.pagination.offset - searchResult.pagination.count
                                        )
                                    }
                                >
                                    <i className="fa fa-angle-left" /> 25
                                </Button>
                                <Button
                                    disabled={searchResult.pagination.offset > searchResult.pagination.total_count - 25}
                                    title="Show next 25 gifs"
                                    style={{ float: 'right' }}
                                    onClick={() =>
                                        loadGifs(
                                            searchString,
                                            searchResult.pagination.offset + searchResult.pagination.count
                                        )
                                    }
                                >
                                    25 <i className="fa fa-angle-right" />
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </main>
            <footer>Powered By GIPHY</footer>
        </div>
    );
}

export default App;
