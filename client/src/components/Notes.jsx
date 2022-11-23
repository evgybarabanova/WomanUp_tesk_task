import React, { useEffect, useState } from "react";
import UpdateNote from "./UpdateNote";
import {
  deleteNotes,
  retrieveNotes,
  uploadFileNotes
} from "../logic";
import "./Note.css";
import axios from 'axios'

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [noteIdToUpdate, setNoteIdToUpdate] = useState()
  const [file, setFile] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e, noteId) => {
    let formData = new FormData()
    formData.append('file', e.target.file.files[0])
    const response = axios.post(`${process.env.REACT_APP_API_URL}/notes/${noteId}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    if (response) setStatus(response.statusText)
  }

  const handleFileChange = (e) => {
    const file = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setFile(file)
  }

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

  return (
    <>
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
              <h1>Upload to server</h1>
              {file.preview && <img src={file.preview} width='100' height='100' />}
              <hr></hr>
              <form onSubmit={e => {
                e.preventDefault()

                handleSubmit(e, note.id)
              }}>
                <input type='file' name='file' onChange={handleFileChange}></input>
                <button type='submit'>Submit</button>
              </form>
              {status && <h4>{status}</h4>}
              <button
                className="note__update-button"
                onClick={() => handleOpenUpdateNote(note.id)}
              >
                update task
              </button>
              <button
                className="note__delete-button"
                onClick={() => handleDeleteNote(note.id)}
              >
                delete task
              </button>
            </div>
          ))}
        </li>
      </ul>
    </>)
}
