const { Note } = require('../db/models');

function retrieveNote(noteId) {
  return (async () => {

    const note = await Note.findOne({ where: { id: noteId }, raw: true });
    if (!note) throw new Error(`note with id ${noteId} not found`)

    return note
  })()
}

module.exports = retrieveNote;