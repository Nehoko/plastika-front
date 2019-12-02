const express = require('express');
const path = require('path');

//init engine
const app = express();
//choose port
const port = 8080;

//load view engine
app.set('views', path.join(__dirname, 'src/pages'));
app.set('view engine', 'pug');

//home route
app.get('/', (request, response) => {
    response.render('index');
});

app.use((err, request, response, next) => {
    console.log(err);
    response.status(500).send('Something broke!')
});

//start server
app.listen(port, function () {
    console.log("server started @ http://localhost:8080");
});