import React, { useEffect, useState } from "react";
import { retrieveNotes, createNotes } from "../logic";

export default function Home() {
  const [notes, setNotes] = useState([]);

  const handleCreateNote = (name, description) => {
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
    <>
      <div>to do list</div>
      <button className="note__create-button" onClick={() => handleCreateNote()}>create notes</button>
    </>
  );
}
