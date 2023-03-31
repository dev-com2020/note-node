console.log('Starting notes.js');
// console.log(module);
// module.exports.age = 25;
// module.exports.addNote = function(){

// }

let addNote = (title,body) => {
    console.log('addNote', title, body);
    let note = {
        title,
        body
    };
    
};

module.exports = {
    addNote: addNote
};