const { Note } = require('../db/models');

function updateNotes(noteId, name, description, date) {
  return (async () => {
    const note = await Note.update({ name, description, date }, { where: { id: noteId }, raw: true })
    if (!note) throw new Error(`note with id ${noteId} not found`)
  })();
  
}

module.exports = updateNotes;
