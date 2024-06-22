import React, {useState} from 'react';

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