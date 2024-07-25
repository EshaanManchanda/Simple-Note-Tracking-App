// src/components/NoteItem.js
import React from 'react';
import './NoteItem.css';

const NoteItem = ({ note, onDelete, onEdit }) => {
  return (
    <div className="note-card">
      <div className="note-content">
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <small>{new Date(note.timestamp).toLocaleString()}</small>
      </div>
      <div className="note-actions">
        <button className="btn edit-btn" onClick={() => onEdit(note)}>Edit</button>
        <button className="btn delete-btn" onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </div>
  );
};

export default NoteItem;
