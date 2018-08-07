const express = require('express');
const hbs = require('hbs');

let app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, resp) => {
    // resp.send('<h1>Hello Express!</h1>');
    // resp.send({
    //     name: 'Max',
    //     likes: [
    //         'boobs',
    //         'pokemons'
    //     ]
    // });
    resp.render('home.hbs', {
        pageTitle: 'Home page',
        wellcomeMsg: 'Hello pokemons!',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, resp) => {
    resp.render('about.hbs', {
        pageTitle: 'About page1',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, resp) => {
    resp.send({
        error: 'Watafak error!'
    });
});
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});