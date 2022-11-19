const { Note } = require('../db/models');

function retrieveNote(noteId) {
  return (async () => {

    let note = await Note.findOne({ where: { id: noteId }, raw: true })
    if (!note) throw new Error(`note with id ${noteId} not found`)

  })()
}

module.exports = retrieveNote;