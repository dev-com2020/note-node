console.log('Starting app.js')
const fs = require('fs');
const os = require('os');
var user = os.userInfo();
const notes = require('./notes');
let res = notes.addNote();
// const _ = require('lodash');

let command = process.argv[2];
console.log("Komenda:",command);
console.log(process.argv);

if (command === 'add'){
    console.log('Dodawanie nowej notatki');
}
    else if (command === 'list'){
        console.log('Listowanie notatki');
    }
    else if (command === 'read'){
        console.log('Odczyt notatki');
    }
    else if (command === 'remove'){
        console.log('Kasowanie notatki');
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
