const express = require('express');
const stylus = require('stylus');
const path = require('path');

//init engine
const app = express();
//choose port
const port = 8080;

//load stylus preprocessor
app.use(stylus.middleware({
    src: __dirname + 'src',
    dest: __dirname + '/public',
    compile: function (str, path, fn) {
        stylus(str)
            .set('filename', path)
            .set('compress', true)
            .render(fn);
    }
}));
app.use(express.static(__dirname + '/public'));

//load view engine
// app.set('views', path.join(__dirname, 'src/pages'));
// app.set('view engine', 'pug');



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
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;