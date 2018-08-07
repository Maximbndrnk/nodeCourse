// let obj = {
//     name: 'Max',
// };

// let stringObj = JSON.stringify(obj);
// console.log(obj);

// let personString = '{"name":"Max"}';
// let personObj = JSON.parse(personString);
// console.log(personObj);

const fs= require('fs');
let myObj = {
    title: 'Vasya',
    body: 'Spat ha4y'
};

let objStr = JSON.stringify(myObj);

fs.writeFileSync('notes.json', objStr);

let noteStr = fs.readFileSync('notes.json');
let note = JSON.parse(noteStr);

console.log(typeof note);
console.log('note', note);