// new router object to handle requests and be exported 
const router = require('express').Router()

const apiNotes = require('./apiNote')

router.use(apiNotes)

module.exports = router