console.log('Starting notes.js');
// console.log(module);
// module.exports.age = 25;
// module.exports.addNote = function(){

// }


const fs = require('fs');

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title,body) => {
    let notes = [];
    let note = {
        title,
        body
    };
    let duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0){   
    notes.push(note);
    saveNotes(notes);   
    return note;
    }
};

let getAll = () =>{
    console.log('Pobranie listy notatek...');
}

let getNote = (title) =>{
    console.log('Pobieram notatkę: ',title);
}

let removeNote = (title) =>{
    console.log('Kasowanie notatki: ',title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};