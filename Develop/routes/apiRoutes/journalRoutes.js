const router = require('express').Router();
const { filterByQuery, deleteById, createNewNote } = require('../../lib/notetaker');
// const {notes} = require('../../data/journal');

router.get('/notes', (req, res) => {
  const {notes} = require('../../data/journal');
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.delete('/notes/:id', (req, res) => {
  const result = deleteById(req.params.id);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
});

router.post('/notes', (req, res) => {
  const {notes} = require('../../data/journal');
  // set id based on what the next index of the array will be
  req.body.id = notes.length;
  const newNote = createNewNote(req.body, notes);
  res.json(newNote);
});

module.exports = router;
