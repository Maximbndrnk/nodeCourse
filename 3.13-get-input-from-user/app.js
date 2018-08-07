const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
const titleOpt = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOpt = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};
let argv = yargs
    .command('add', 'Add new note', {
        title: titleOpt,
        body: bodyOpt
    })
    .command('list', 'List all notes')
    .command('read', 'Read a specific note', {
        title: titleOpt
    })
    .command('remove', 'Remove a specific note', {
        title: titleOpt
    })
    .help()
    .argv;
let command = argv._[0];

// console.log(process);
// console.log("Command: "+ command);
// console.log("process.argv: ", process.argv);
// console.log("yargs.argv: ", yargs.argv);

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Adding is succesful!');
        notes.logNote(note);
    } else {
        console.log('Error occur!');
    }
} else if (command === 'list') {
    let allnotes = notes.getAll();
    console.log(`Printing ${allnotes.length} note(s).`);
    allnotes.forEach(n => notes.logNote(n));
} else if (command === 'read') {
    let n = notes.getNote(argv.title);
    notes.logNote(n);
} else if (command === 'remove') {
    let rm = notes.removeNote(argv.title);
    let msg = rm ? `Note removed` : `Removing failed`;
    console.log(msg);
} else {
    console.log('Command not recognized');
}
