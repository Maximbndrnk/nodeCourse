console.log('start app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

const res = notes.add(2,-5);

console.log('res='+res);
// console.log('res='+res);
// let user = os.userInfo();
// fs.appendFileSync('greetings.txt', `hello ${user.username}! My Age is ${notes.age}!`);
// fs.appendFile('greetings2.txt', 'Hello!',function(err) {
//     if(err) {
//        console.log('unable to write file');
//     }
// });