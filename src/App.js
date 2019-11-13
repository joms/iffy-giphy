import React, { useState } from 'react';

function App() {
    const [searchString, setSearchString] = useState('');

    return (
        <div className="App">
            <input
                type="text"
                value={searchString}
                onChange={e => setSearchString(e.target.value)}
                placeholder="Search"
            />
            Powered By GIPHY
        </div>
    );
}

export default App;
