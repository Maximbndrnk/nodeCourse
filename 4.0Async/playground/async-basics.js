console.log('start app');

setTimeout(()=>{
    console.log('callback');
},2000);

setTimeout(()=>{
    console.log('callback22');
},0);

let str = ''

// for(let i = 0; i < 10000000; i++) {
//     str+=i;
// }
console.log(str.length);
console.log('end app');