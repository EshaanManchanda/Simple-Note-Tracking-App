// src/App.js
import React from 'react';
import NoteList from './components/NoteList';
import './styles.css';

const App = () => {
  return (
    <div className="container">
      <h1>Simple Note Taking App</h1>
      <NoteList />
    </div>
  );
};

export default App;
