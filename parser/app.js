const cheerio = require('cheerio');
const needle = require('needle');
const fs = require('fs');

let i =1;
let mainLink = 'http://loveread.ec/read_book.php?id=54931&p=';

function writeFile (fileName, data) {
    return new Promise((resolve, reject) => {
        fs.appendFile(fileName, data, function(err) {
                if(err) {
                   console.log('unable to write file');
                }
            });
    });
}

function getCategoryLinks(link) {
    return new Promise((resolve, reject) => {
        needle.get(link, (error, response) => {
            if (!error && response.statusCode == 200) {
                let $ = cheerio.load(response.body);
                const bookTextArr = $('p.MsoNormal, div.take_h1');

                // console.log('TYPEOF', typeof bookTextArr);
                // console.log(bookTextArr.text());
                // bookTextArr.children().html();
                i++;
                writeFile(i+'.txt', bookTextArr.text())
                resolve(bookTextArr.text());
            }
        });
    });
}

getCategoryLinks(mainLink+'1')
.then(getCategoryLinks(mainLink+'2'))
.then(getCategoryLinks(mainLink+'3'))
.then(getCategoryLinks(mainLink+'4'))
.then(getCategoryLinks(mainLink+'5'));




