const express = require("express")
const path = require('path');
const app = express();
const port = 5000;
//to set the static file stuff
app.use(express.urlencoded())
app.use('/static', express.static('static'))
    //set the template engine as pug
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views')) //set the views directoryapp.get('/', (req, res) => {
const con = "this is the best content ever before so use it wisely"
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('index.pug', params);
});
app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params);
});
app.listen(port, () => {
    console.log(`The application started succefully on${port}`);
});