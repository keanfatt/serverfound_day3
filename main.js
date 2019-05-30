//Load the required libs
const express = require('express');

//Tunables
const PORT = parseInt(process.argv[2] || process.env.APP_PORT || 3000);

//Create an instance of express
const app = express();

//Define routing rules and handlers
//1. generate dynamic content


//2. load static resources from content
//app.use(express.static(__dirname +'/content'));

app.get(/.*/, express.static(__dirname +'/content'));


//3. Error
app.use((req, resp) =>{
resp.status(404);
resp.type('text/html');
resp.sendFile(__dirname + '/content/404.html');

})

//start the server
app.listen(PORT, () => {
    console.info(`Application started at ${new Date()} on port ${PORT}`);
});