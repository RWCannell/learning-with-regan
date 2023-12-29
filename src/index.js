const express = require('express');
const path = require('path')
const app = express();
// app.use('/static', express.static(path.join(__dirname, 'public')));

// app.use(express.static('public/assets'));

app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
});

app.listen(3000);