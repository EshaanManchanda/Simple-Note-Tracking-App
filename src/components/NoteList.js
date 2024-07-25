// src/components/NoteList.js
import React, { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import NoteItem from './NoteItem';
import Pagination from './Pagination';
import { getNotes, deleteNote } from '../utils/localStorageService';
import './NoteList.css'; // Import the CSS file

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [noteToEdit, setNoteToEdit] = useState(null); // State to hold the note being edited
  const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term
  const notesPerPage = 10;

  useEffect(() => {
    const storedNotes = getNotes();
    setNotes(storedNotes);
  }, []);

  const handleDelete = (id) => {
    deleteNote(id);
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEdit = (note) => {
    setNoteToEdit(note);
  };

  const handleSave = () => {
    setNotes(getNotes());
    setNoteToEdit(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);

  return (
    <div className="note-list">
      <div className="note-form-container">
        <NoteForm note={noteToEdit} onSave={handleSave} />
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="pagination-container">
        <Pagination
          totalNotes={filteredNotes.length}
          notesPerPage={notesPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      {currentNotes.map(note => (
        <NoteItem key={note.id} note={note} onDelete={handleDelete} onEdit={handleEdit} />
      ))}
    </div>
  );
};

export default NoteList;
