const { Note } = require('../db/models');

function retrieveNotes() {

  return (async () => {
   
    let notes = await Note.findAll({})

    notes = notes.map((note) => ({
      id: note.id.toString(),
      name: note.name,
      description: note.description,
      date: note.date
    }))

    return notes
  })();
}

module.exports = retrieveNotes;
