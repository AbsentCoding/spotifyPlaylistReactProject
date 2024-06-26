import React, {useState} from 'react';
import Header from 'spotify-playlist\Files\Components\Header\Header.js';
import SearchBar from '../Search Section/SearchBar';
import SearchSubmit from 'spotify-playlist/Files/Components/Search Section/SearchSubmit.js';
import SearchResults from 'spotify-playlist\Files\Components\Search Results\SearchResults.js';
import TrackList from 'spotify-playlist/Files/Components/Tracklist/Tracklist.js';
import Track from 'spotify-playlist/Files/Components/Tracks/Track.js';

function Jammming() {
    return (
        <>
            <div>
                <span id='title'>
                    <Header />
                </span>
                <span id='searchSection'>
                    <SearchBar />
                    <SearchSubmit />
                </span>
                <span id='trackSection'>
                    <SearchResults />
                    <TrackList />
                    <Track />
                </span>
                <span id='playlistSection'>
                </span>
            </div>
        </>
    );
};

export default Jammming;

// Jammming 

//section for the search bar and submit
//Search bar with submit button below it


//section for the tracks 
//section for the playlist information