const express = require('express'),
    fs = require('fs'),
    https = require('https'),
    app = express();

const options = {
    cert: fs.readFileSync('./https/cert.pem'),
    key: fs.readFileSync('./https/key.pem')
}

app.use(express.static('public'));

https.createServer(options, app)
    .listen(443, '192.168.0.189', () => {
        console.log('Se levantó el servidor');
    });

app.get('/', (req, res) => {
    res.render('index');
});
