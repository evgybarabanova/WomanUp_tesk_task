import React, { useState } from "react";
import { retrieveNotes, createNotes } from "../logic";
import './Home.css'

export default function Home() {
  const [notes, setNotes] = useState([]);

  const handleCreateNote = () => {
    try {
      createNotes("")
        .then(() => retrieveNotes())
        .then((notes) => setNotes(notes))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <header>
      <h1><b>to do list</b></h1>
      <button className="note__create-button" onClick={() => handleCreateNote()}>create note</button>
    </header>
  );
}
