import React, { useState, useEffect } from 'react';
import './App.css';
import SearchEngine from 'src/SearchEngine.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ForestHub React Search Engine</h1>
        <SearchEngine />
      </header>
    </div>
  );
}

export default App;