const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { filterByQuery, deleteById, createNewNote } = require('../../lib/notetaker');
// const {notes} = require('../../data/journal');

router.get('/notes', (req, res) => {
  console.log(__dirname);
  console.log(path.join(__dirname, "../../data/journal.json"));
  let { notes: results } = JSON.parse(fs.readFileSync(path.join(__dirname, "../../data/journal.json"), "utf-8"));
  console.log("GET notes");
  console.log(new Date().getSeconds());
  console.log(results);

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
  const { notes } = JSON.parse(fs.readFileSync(path.join(__dirname, "../../data/journal.json"), "utf-8"));
  // set id based on what the next index of the array will be
  
  req.body.id = notes.length;
  const newNote = createNewNote(req.body, notes);
  res.json(newNote);
});

module.exports = router;
