import React, {useState} from 'react';
import SearchSubmit from 'spotify-playlist/Files/Components/Search Section/SearchButton.js';
import styles from 'spotify-playlist/Files/Components/Modules CSS/SearchBar.module.css'

function SearchBar() {
    const [userInput, setUserInput] = useState("");

    function handleUserInput(e) {
        setUserInput(e.target.value);
    };

    function handleSubmit(e) {
        
    };

    return (
        <>
            <div className={styles.searchContainter}>
                <form onSubmit={handleSubmit}>
                    <label>Search Here</label>
                    <input type="text"></input>
                </form>
            </div> 
        </>
    );
};

export default SearchBar;