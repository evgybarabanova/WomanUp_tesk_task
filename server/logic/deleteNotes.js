const { Note } = require('../db/models');

 function deleteNotes(noteId) {
  return (async () => {
  
    const result = await Note.destroy({ where: { id: noteId } })
    if (!result) throw new Error(`note with id ${noteId} not found`)
  })();
}

module.exports = deleteNotes;
