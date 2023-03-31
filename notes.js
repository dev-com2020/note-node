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

let getAll = () =>{
    console.log('Pobranie listy notatek...');
}

let getNote = (title) =>{
    console.log('Pobieram notatkę: ',title);
}

module.exports = {
    addNote,
    getAll,
    getNote
};