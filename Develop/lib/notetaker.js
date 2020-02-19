const fs = require('fs');
const path = require('path');

function filterByQuery(query, animalsArray) {
  
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

function findById(id, notesArray) {
  const result = notesArray.filter(notes=> notes.id === id)[0];
  return result;
}

function createNewNote(body, notesArray) {
  const note = body;
 notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../data/journal.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return animal;
}

module.exports = {
  filterByQuery,
  findById,
  createNewNote
};