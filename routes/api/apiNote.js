const router = require('express').Router()
const { createNew, deleteNote} = require('../../lib/notes');
let { notes } = require('../../db/db');

// read 
router.get('/notes', (req, res) => {
    // read the db.json file and return all saved notes as JSON
    let saved = notes;
    res.json(saved);
})

// create
router.post('/notes', (req, res) => {
    // receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
    req.body.id = notes.length.toString();
    let note = createNew(req.body, notes);
    res.json(note);
})

// delete
router.delete('/notes/:id', async (req, res) => {
    // read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
    deleteNote(notes, req.params.id);
    res.json(notes);
})

module.exports = router