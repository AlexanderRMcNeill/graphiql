const express = require('express');
var path = require('path');

const GRAPHQL_SERVER_URL = process.env.GRAPHQL_SERVER_URL;
const GRAPHIQL_PORT = 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index.ejs', {
        data: {
            url: GRAPHQL_SERVER_URL
        }
    });
});

app.listen(GRAPHIQL_PORT, function() {
    console.log(`Website running on port ${GRAPHIQL_PORT}`);
});