import React, {useState} from 'react';
import SearchButton from 'spotify-playlist/Files/Components/Search Section/SearchButton.js';

function SearchBar() {
    const [userInput, setUserInput] = useState("");

    function handleUserInput(e) {
        setUserInput(e.target.value);
    };

    function handleSubmit(e) {
        
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    
                </form>
            </div>
        </>
    );
};

export default SearchBar;