const express = require('express');

const app = express();
const path = require('path');
const router = require('./../routes/routes');
//const form = require('./../views/form');

//setting
app.set('port', 8080);

app.set('view engine', 'ejs');

//staticFile
app.use(express.static(path.join(__dirname, './../public')));

//router
app.use(router);
//app.use(form);




app.listen(app.get('port'), ()=>{
    console.log('escuchando');
});
