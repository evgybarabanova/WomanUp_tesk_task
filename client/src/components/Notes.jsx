import React, { useEffect, useState } from "react";
import UpdateNote from "./UpdateNote";
import {
  deleteNotes,
  retrieveNotes,
} from "../logic";
import "./Note.css";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [noteIdToUpdate, setNoteIdToUpdate] = useState()

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

  // const handleUpdateNote = (noteId, name, description, date, status) => {
  //   try {
  //     updateNote(noteId, name, description, date, status)
  //       .catch((error) => alert(error.message));
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  const handleOpenUpdateNote = (noteId) => {
    setNoteIdToUpdate(noteId)
  }

  const handleNoteUpdated = () => {
    try {
      retrieveNotes()
        .then((notes) => {
          setNoteIdToUpdate()
          setNotes(notes);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }

  return (<>
   {noteIdToUpdate && <UpdateNote noteId={noteIdToUpdate} onUpdated={handleNoteUpdated}/> }
   
    <ul className="list">
      <li className="list_item">
        {notes.map((note) => (
          <div className="note">
            <input defaultValue={note.status} type="checkbox" disabled />
            <p className="add">title of task</p>
            <p className="note__name">{note.name}</p>
            <p className="add">description of task</p>
            <p className="note__description">{note.description}</p>
            <p className="add">the time of the task</p>
            <p className="note__date">{note.date}</p>

            <p>File of note</p>
            <button className="note__add-button">add files</button>
            <button
              className="note__update-button"
              onClick={() => handleOpenUpdateNote(note.id)}
            >
              update note
            </button>
            <button
              className="note__delete-button"
              onClick={() => handleDeleteNote(note.id)}
            >
              delete note
            </button>
          </div>
        ))}
      </li>
    </ul>
  </>);
}
