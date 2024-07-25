// src/components/NoteForm.js
import React, { useState, useEffect } from 'react';
import { addNote, updateNote } from '../utils/localStorageService';
import './NoteForm.css';

const NoteForm = ({ note, onSave }) => {
  const [title, setTitle] = useState(note ? note.title : '');
  const [content, setContent] = useState(note ? note.content : '');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().toISOString();
    if (note) {
      updateNote({ ...note, title, content, timestamp });
    } else {
      addNote({ id: Date.now(), title, content, timestamp });
    }
    onSave();
    setTitle('');
    setContent('');
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        className="form-control"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button className="btn submit-btn" type="submit">Save</button>
    </form>
  );
};

export default NoteForm;
