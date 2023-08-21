// new router object to handle requests and be exported 
const router = require('express').Router();

// path module 
const path = require('path');

// read
router.get('/', (req, res) => {
    // home page
    res.sendFile(path.join(__dirname, '../../public/index.htmls'));
});

router.get('/notes', (req, res) => {
    // return notes.html
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('*', (req, res) => {
    // return index.html
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

module.exports = router