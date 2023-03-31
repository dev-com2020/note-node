console.log('Starting app.js')
const fs = require('fs');
const os = require('os');
var user = os.userInfo();
const notes = require('./notes');
let res = notes.addNote();
const yargs = require('yargs');

const argv = yargs.argv;
let command = process.argv[2];
// console.log("Komenda:",command);
console.log("Proces:",process.argv);
console.log("Yargs",argv);


if (command === 'add'){
    console.log('Dodawanie nowej notatki');
    let note = notes.addNote(argv.title, argv.body);
    if (note){
        console.log('Notatka dodana!');
    } else {
        console.log('Notatka o takiej nazwie już istnieje!');
    }
}
    else if (command === 'list'){
        notes.getAll();
    }
    else if (command === 'read'){
        notes.getNote(argv.title);
    }
    else if (command === 'remove'){
        let noteRemoved = notes.removeNote(argv.title);
        let message = noteRemoved ? 'Notatka została usunięta' : 'Notatka nie istnieje';
        console.log(message);
    }
    else {
        console.log('Nie rozpoznana komenda!');
    }

    


// console.log(res);

// fs.appendFileSync('powitanie2.txt', `Witaj ${user.username} !Masz ${notes.age}.`);


// fs.appendFile('powitanie.txt','Hello JS!'); //depricated (max. v.10)

// fs.appendFileSync('powitanie.txt','Hello JS ' + user.username + "!");


// fs.appendFile('powitanie.txt','Hello JS ponownie!',function (err){
//     if (err){
//         console.log('Problem z dostępem do pliku!')
//     }
// });

// console.log(user);
