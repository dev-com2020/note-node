// let obj = {
//     name: 'Andrew'
// };

// let personString = '{"name": "Andrew", "age": 25}';
// let person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some body'
};

fs.writeFileSync('notes.json', JSON.stringify(originalNote));

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log(note.title, note.body);