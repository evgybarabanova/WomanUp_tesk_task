const { Note, File } = require('../db/models');

function uploadFileNotes(noteId, file) {
  return (async () => {
    const note = await Note.findOne({ where: { id: noteId }, raw: true });
    if (!note) throw new Error(`note with id ${noteId} not found`)
   
			await File.create({note_id: note.id, file: file.filename })
  })();
  
}

module.exports = uploadFileNotes;
