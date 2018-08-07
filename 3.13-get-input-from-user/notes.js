const fs = require('fs');

const fetchNotes = () => {
    try {
        let noteStr = fs.readFileSync('notes-data.json');
        return JSON.parse(noteStr);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title, body
    }

    let duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};
const getAll = () => {
    return fetchNotes();
};
const getNote = (title) => {
    let notes = fetchNotes();
    let note = notes.filter(n => n.title === title);
    return note[0];
};

const removeNote = (title) => {
    let notes = fetchNotes();
    fnotes = notes.filter(n => n.title !== title);
    saveNotes(fnotes);
    return fnotes.length != notes.length;
};

const logNote = (note) => {
    debugger;
    console.log(`--`);
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
