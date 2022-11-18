import React, { useEffect, useState } from "react";
import { updateNameNotes, updateDescriptionNotes, updateDateNotes, deleteNotes, retrieveNotes } from "../logic";
import "./Note.css";

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

  const handleUpdateNameNote = (noteId, name) => {
    try {
      updateNameNotes(noteId, name).catch((error) =>
        alert(error.message)
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUpdateDescriptionNote = (noteId, description) => {
    try {
      updateDescriptionNotes(noteId, description).catch((error) =>
        alert(error.message)
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUpdateDateNote = (noteId, date) => {
    try {
      updateDateNotes(noteId, date).catch((error) =>
        alert(error.message)
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ul className="list">
      <li className="list_item">
        {notes.map((note) => (
          <div className="note">
            <p className="add">enter your name</p>
            <p
              className="note__name"
              contentEditable="true"
              onKeyUp={(event) => {
                const name = event.target.innerText;
                
                handleUpdateNameNote(note.id, name);
              }}
            >
              {note.name}
            </p>

            <p className="add">enter your description</p>
            <p
              className="note__description"
              contentEditable="true"
              onKeyUp={(event) => {
                const description = event.target.innerText;

                handleUpdateDescriptionNote(note.id, description);
              }}
            >
              {note.description}
            </p>

            <p className="add">enter your date</p>
            <p
              className="note__date"
              contentEditable="true"
              onKeyUp={(event) => {
                const date = event.target.innerText;

                handleUpdateDateNote(note.id, date);
              }}
            >
              {note.date}
            </p>

            <p>File of note</p>
            <button className="note__add-button">add files</button>
            <button
              className="note__delete-button"
              onClick={() => handleDeleteNote(note.id).reverse()}
            >
              delete note
            </button>
          </div>
        ))}
      </li>
    </ul>
  );
}
