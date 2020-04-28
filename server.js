const express = require('express');
const hbs = require('hbs');
const app = express();

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Daniel',
        anyo: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anyo: new Date().getFullYear()
    });
});

app.get('/data', (req, res) => {
    res.send('holii');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});