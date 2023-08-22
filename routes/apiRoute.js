const router = require('express').Router()
const path = require('path')
const deleteNote = require('../lib/notes')
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
        const createNew = JSON.parse(await fs.readFile(db, "utf-8"));
        createNew.push({
            title: req.body.title,
            text: req.body.text,
        });
        await fs.writeFile(db, JSON.stringify(createNew));
        res.json(createNew);
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