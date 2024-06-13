import React, {useState} from 'react';
import Header from 'spotify-playlist\Files\Components\Header\Header.js';
import SearchBar from '../Search Section/SearchBar';
import SearchButton from '../Search Section/SearchButton';
import SearchResults from 'spotify-playlist\Files\Components\Search Results\SearchResults.js';

function Jammming() {
    return (
        <>
            <div>
                <Header />
                <SearchBar />
                <SearchButton />
                <SearchResults />
                <span>

                </span>
                <span>
                    
                </span>
            </div>
        </>
    )
};

export default Jammming;