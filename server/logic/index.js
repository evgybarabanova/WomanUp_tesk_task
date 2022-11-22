const createNotes = require('./createNotes');
const updateNotes = require('./updateNotes');
const deleteNotes = require('./deleteNotes');
const retrieveNotes = require('./retrieveNotes')
const retrieveNote = require('./retrieveNote')
const uploadFileNotes = require('./uploadFileNotes')

module.exports = {
  createNotes,
  updateNotes,
  deleteNotes,
  retrieveNotes,
  retrieveNote,
  uploadFileNotes
};
