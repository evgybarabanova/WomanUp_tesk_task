const { Note } = require('../db/models');

function updateNotes(noteId, description) {
  return (async () => {
    const note = await Note.update({ description }, { where: { id: noteId }, raw: true })
    if (!note) throw new Error(`note with id ${noteId} not found`)
  })();
}

module.exports = updateNotes;
