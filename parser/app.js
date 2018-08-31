const cheerio = require('cheerio');
const needle = require('needle');
const fs = require('fs');

let i = 1;
let mainLink = 'http://loveread.ec/read_book.php?id=54931&p=';

function writeFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.appendFile(fileName, data, function (err) {
            if (err) {
                console.log('unable to write file');
                reject();
            }
        });
        resolve(true);
    });
}

function getCategoryLinks(link) {
    return new Promise((resolve, reject) => {
        needle.get(link, (error, response) => {
            if (!error && response.statusCode == 200) {
                let $ = cheerio.load(response.body);
                const bookTextArr = $('p.MsoNormal, div.take_h1');
                resolve(bookTextArr.text());
            }
        });
    });
}

let a = [];
for (let i = 1, len = 45; i < len; i++) {
    a.push(getCategoryLinks(mainLink + i + ''));
}



Promise.all(a).then(val => {
    res = '';
    val.forEach((e) => res += e);
    writeFile('2.txt', res);
    
});

// getCategoryLinks(mainLink + '41')
//     .then((resp) => {
//         writeFile('1.txt', resp)
//             .then(() => {
//                 getCategoryLinks(mainLink + '42')
//                     .then((resp) => {
//                         writeFile('1.txt', resp)
//                             .then(() => {
//                                 getCategoryLinks(mainLink + '43')
//                                     .then((resp) => {
//                                         writeFile('1.txt', resp)
//                                             .then(() => {
//                                                 getCategoryLinks(mainLink + '44')
//                                                     .then((resp) => {
//                                                         writeFile('1.txt', resp)
//                                                             .then(() => {
//                                                                 // getCategoryLinks(mainLink + '40')
//                                                                 //     .then((resp) => {
//                                                                 //         writeFile('1.txt', resp)
//                                                                 //             .then(() => {

//                                                                 //             });
//                                                                 //     });
//                                                             });
//                                                     });
//                                             });
//                                     });
//                             });
//                     });
//             });
//     });






