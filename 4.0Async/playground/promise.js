let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Agruments must be numbers');
            }
        }, 1500);
    })
}

asyncAdd(5, '7').then((res) => {
    console.log(`Success: ${res}`);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log(`Should be 45: ${res}`);
}).catch(err => {
    console.log(err);
});

// let sp = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('It work!');
//         reject('Unable work!');
//     }, 2500);
// });

// sp.then((msg) => {
//     console.log(`Success: ${msg}`);
// }, (msg) => {
//     console.log(`Error: ${msg}`);
// });