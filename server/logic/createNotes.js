const { Note } = require('../db/models');

function createNotes(name, description) {
  return (async () => {
    await Note.create({ name, description, date: Date()})
  })();
}

module.exports = createNotes;
