// require() function to load express module to get access to express exports 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


// require() function to load modules in route folders to be exported
const routes = require('./routes')

// JSON and URL Encoded needed for POST and PUT requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static middleware
app.use(express.static('public'))

// Use API routes
app.use(routes)

// server listens to PORT
app.listen(PORT, () => { console.log(`API server listening on port ${PORT}`) }) ;