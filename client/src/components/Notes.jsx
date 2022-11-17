import React, { useEffect, useState } from "react";
import { updateNotes, deleteNotes, retrieveNotes } from "../logic";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    try {
      retrieveNotes()
        .then((notes) => {
          setNotes(notes);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const handleDeleteNote = (noteId) => {
    try {
      deleteNotes(noteId)
        .then(() => retrieveNotes())
        .then((notes) => setNotes(notes))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUpdateNote = (noteId, description) => {
    try {
      updateNotes(noteId, description).catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ul className="list">
      <li className="list_item">
        {notes.map((note) => (
          <div className="note">
            <button
              className="note__delete-button"
              onClick={() => handleDeleteNote(note.id).reverse()}
            >
              x
            </button>
            <p>add name</p>
            <p
              className="note__name"
              contentEditable="true"
              onKeyUp={(event) => {
                const name = event.target.name;

                handleUpdateNote(note.id, name);
              }}
            >
              {note.name}
            </p>
            <p>add description</p>
            <p
              className="note__description"
              contentEditable="true"
              onKeyUp={(event) => {
                const description = event.target.innerText;

                handleUpdateNote(note.id, description);
              }}
            >
              {note.description}
            </p>
            <p>add date</p>
            <p
              className="sticker__date"
              contentEditable="true"
              onKeyUp={(event) => {
                const date = event.target.date;

                handleUpdateNote(note.id, date);
              }}
            >
              {note.date}
            </p>
            <p>File of note</p>
            <button className="note__add-button">add files</button>
          </div>
        ))}
      </li>
    </ul>
  );
}
