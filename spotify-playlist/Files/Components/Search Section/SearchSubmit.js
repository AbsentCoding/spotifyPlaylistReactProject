import React, {useState} from 'react';

function SearchSubmit() {
    const[submit, setSubmit] = useState("")
    
    function handleSubmit(e) {
        setSubmit(onclick.)
    };

    return (
        <>
            <form className="SearchSubmit" onSubmit={handleSubmit}>
                <label>Search</label>
                <input type="submit" value="Search" />
            </form>
        </>

    );
};

export default SearchSubmit;