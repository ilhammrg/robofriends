import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots';

const App = () => {
    return (
        <div className='flex flex-column items-center'>
            <h1>Robo Friends</h1>
            <SearchBox />
            <CardList robots={robots} />
        </div>
    );
}

export default App;