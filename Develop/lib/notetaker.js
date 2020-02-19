const fs = require('fs');
const path = require('path');

function filterByQuery(query) {
  let { notes: filteredResults } = require('../data/journal');
  if (query.title) {
    filteredResults = filteredResults.filter(notes => notes.title === query.title);
  }
  if (query.body) {
    filteredResults = filteredResults.filter(notes => notes.body === query.body);
  }
  if (query.journal) {
    filteredResults = filteredResults.filter(notes=> notes.journal === query.journal);
  }
  return filteredResults;
}

function deleteById(id) {
  const {notes} = require('../data/journal');
  console.log(notes)
  const result = notes.filter(note=> note.id != id);
  fs.writeFileSync(
    path.join(__dirname, '../data/journal.json'),
    JSON.stringify({ notes: result }, null, 2)
  );
  return result;
}

function createNewNote(body, notesArray) {
  const note = body;
 notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../data/journal.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

module.exports = {
  filterByQuery,
  deleteById,
  createNewNote
};