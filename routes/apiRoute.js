const router = require('express').Router()
const path = require('path')
const nanoID = require('nanoid')
const fs = require('fs/promises')
let db = require('../../db/db');

// read 
router.get('/api/notes', async (req, res) => {
    // read the db.json file and return all saved notes as JSON
    try {
        const result = JSON.parse(await fs.readFile(db));
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// create
router.post('/api/notes', async (req, res) => {
    // receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
    try{
        const notes = JSON.parse(await fs.readFile(db, "utf-8"));
        notes.push({
            title: req.body.title,
            text: req.body.text,
            id: nanoID(),
        });
        await fs.writeFile(db, JSON.stringify(notes));
        res.json(notes);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

// delete
router.delete('/api/notes/:id', async (req, res) => {
    // read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
    deleteNote(notes, req.params.id);
    res.json(notes);
})

module.exports = router