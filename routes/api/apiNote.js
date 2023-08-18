const router = require('express').Router()

// read 
router.get('/api/notes', (req, res) => {
    // read the db.json file and return all saved notes as JSON
})

// create
router.post('/api/notes', (req, res) => {
    // receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved 
})

module.exports = router