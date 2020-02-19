const router = require('express').Router();
const { filterByQuery, findById, createNewNote } = require('../../lib/notetaker');
const {notes} = require('../../data/journal');

router.get('/notetaker', (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.get('/notetakers/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/notetaker', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length;
  const notes = createNewNote(req.body, notes);
  res.json(notes);
});

module.exports = router;
