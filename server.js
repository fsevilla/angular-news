/** 
 * This file is used to serve our Angular built app 
 * on top of Node JS
*/

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const projectName = 'angular-news';

app.use(express.static(__dirname+'/dist/'+projectName));

app.get('/*', function(req, res) {
    res.sendFile(__dirname+'/dist/'+projectName+'/index.html');
});

app.listen(port);

console.log('app is running in port '+port);

