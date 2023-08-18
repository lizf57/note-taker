// new router object to handle requests and be exported 
const router = require('express').Router();

// read
router.get('/', (req, res) => {
    // home page
})

router.get('/notes', (req, res) => {
    // return notes.html
})

router.get('*', (req, res) => {
    // return index.html
})

module.exports = router