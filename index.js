const express = require('express');

const app = express()

// funtion memiliki2 parameter
app.get('/', function(request, response){
    response.send("Running Server Heloo World")
});

app.get('/about', function(request, response){
    response.send("ini halaman world")
});

app.listen(8000, function(){
    console.log('server starting port 8000')
})