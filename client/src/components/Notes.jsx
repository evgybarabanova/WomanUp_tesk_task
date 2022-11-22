import React, { useEffect, useState } from "react";
import UpdateNote from "./UpdateNote";
import {
  deleteNotes,
  retrieveNotes,
  uploadFileNotes
} from "../logic";
import "./Note.css";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [noteIdToUpdate, setNoteIdToUpdate] = useState()
  const [file, setFile] = useState()

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

  const handleOpenUpdateNote = (noteId) => {
    setNoteIdToUpdate(noteId)
  }

  // const onSubmitHandler = (e)=>{
  //   e.preventDefault()
  // }

  //   const fileChangeHandler = (e) =>{
  //     setFileData(e.target.files[0])
  //   }

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

  const handleUploadFileNotes = (noteId, file) => {
    try {
      uploadFileNotes(noteId, file)
        .then((file) => setFile(file))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }

  return (<>
    {noteIdToUpdate && <UpdateNote noteId={noteIdToUpdate} onUpdated={handleNoteUpdated} />}

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
            {/* <form>
              <p>File of note</p>
              <button className="note__add-button">choose file</button>
              <input type="file" name="file" />
              <button className="btn btn-primary" type="submit">Upload</button>
            </form> */}
            <form >
                        <div className="form-group">
                            <input type="file"  />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
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
