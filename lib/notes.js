// import node file system and path
const fs = require('fs');
const path = require('path');

// Creating a new note
function createNew(body, notes) {
    const note = body; 
    notes.push(note);
    // writeFile
    fs.writeFileSync(
        path.join(__dirname, '../db/db'),
        JSON.stringify({
            notes: notes
        }, null, 2)
    )
    return note;
}

// Deleting a note
function deleteNote(notes, id) {
    // id value as an integar
   let deleteID =parseInt(id)
   notes.splice(deleteID, 1);

   for (let i= deleteID; i < notes.length; i++){
    notes[i].id = i.toString()
   }
    // writeFile
    fs.writeFileSync(
        path.join(__dirname, '../db/db'),
        JSON.stringify({
            notes: notes
        }, null, 2)
    )
}

module.exports = deleteNote
module.exports = createNew