import React, { useEffect, useState } from "react";
import { createNote, updateNote, deleteNote } from "../logic";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  return (
    <ul className="list">
      <li className="list_item">
        <div className="note">
          <button className="note__delete-button">x</button>
          <button className="note__update-button">update</button>
          <button className="note__add-button">add files</button>
          <p>Name of task</p>
          <p>Description</p>
          <p>Date of ending</p>
          <p>File of note</p>
        </div>
      </li>
    </ul>
  );
}
