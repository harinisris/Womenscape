// Web-Server code

const express = require('express');
const app = express();

// Set the view engine to EJS

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// render the separate pages (also allowing for absolute urls)

app.get('/', (req, res) => {
	res.render('pages/index');
})

app.get('/community', (req, res) => {
	res.render('pages/community');
})

app.get('/Opportunities', (req, res) => {
	res.render('pages/Opportunities');
})
app.get('/OnlineCourses', (req, res) => {
	res.render('pages/OnlineCourses');
})
app.get('/chat', (req, res) => {
	res.render('pages/chat');
})
// Initiate the server on port 8080

app.listen(80)