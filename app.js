console.log("Starting app.js");
const fs = require("fs");
const os = require("os");
var user = os.userInfo();
const notes = require("./notes");
let res = notes.addNote();
const yargs = require("yargs");

const titleOptions = {
    describe: "Tytuł notatki",
    demand: true,
    alias: "t",
  };
  const bodyOptions = {
    describe: "Treść notatki",
    demand: true,
    alias: "b",
  };

const argv = yargs
.command("add", "Dodaj nową notatkę", {
  title: titleOptions,
  body: bodyOptions,
})
.command("list", "Wyświetl wszystkie notatki")
.command("read", "Wyświetl notatkę", {
  title: titleOptions,
})
.command("remove", "Usuń notatkę", {
  title: titleOptions,
})
.help()
.argv;









let command = process.argv[2];
// console.log("Komenda:",command);
console.log("Proces:", process.argv);
console.log("Yargs", argv);

if (command === "add") {
  console.log("Dodawanie nowej notatki");
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Notatka dodana!");
    notes.logNote(note);
  } else {
    console.log("Notatka o takiej nazwie już istnieje!");
  }
} else if (command === "list") {

  let allNotes = notes.getAll();
  console.log(`Wyświetlanie ${allNotes.length} notatek`);
    allNotes.forEach((note) => notes.logNote(note));

} else if (command === "read") {
  let note = notes.getNote(argv.title);
  if (note) {
    console.log("Notatka znaleziona!");
    notes.logNote(note);
  } else {
    console.log("Notatka nie istnieje!");
  }
} else if (command === "remove") {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved
    ? "Notatka została usunięta"
    : "Notatka nie istnieje";
  console.log(message);
} else {
  console.log("Nie rozpoznana komenda!");
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
