import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
            <input
                type="text"
                placeholder="Search for a location"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            <button onClick={handleSearch} style={{ padding: "10px", marginLeft: "10px" }}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
