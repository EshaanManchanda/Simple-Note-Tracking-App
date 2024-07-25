// src/utils/localStorageService.js

const NOTES_KEY = 'notes';

export const getNotes = () => {
  return JSON.parse(localStorage.getItem(NOTES_KEY)) || [];
};

export const addNote = (note) => {
  const notes = getNotes();
  notes.push(note);
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
};

export const updateNote = (updatedNote) => {
  const notes = getNotes();
  const noteIndex = notes.findIndex(note => note.id === updatedNote.id);
  notes[noteIndex] = updatedNote;
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
};

export const deleteNote = (id) => {
  const notes = getNotes();
  const updatedNotes = notes.filter(note => note.id !== id);
  localStorage.setItem(NOTES_KEY, JSON.stringify(updatedNotes));
};
