const { Note, File } = require('../db/models');

function uploadFileNotes(noteId, files) {
  return (async () => {
    const note = await Note.findOne({ where: { id: noteId }, raw: true });
    if (!note) throw new Error(`note with id ${noteId} not found`)
   
    for (let i = 0; i < files.length; i++) {
			const file = await File.create({note_id: note.id, file: files[i].filename })
		}
  })();
  
}

module.exports = uploadFileNotes;
