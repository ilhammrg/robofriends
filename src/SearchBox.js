import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className="mv3">
            <input 
                className = 'bg-dark-gray near-white ba b--gray br2 bw1 pa3'
                type='search' 
                placeholder='Search robots...'
                onChange={searchChange} 
            />
        </div>
    );
}

export default SearchBox;