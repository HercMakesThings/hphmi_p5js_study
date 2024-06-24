const { urlencoded } = require('express');
const express = require('express');
const app = express();
const port = process.env.port || 3000;
const bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
const urlencodedParser = bodyParser.urlencoded({ extended: false });

//enable express to serve static files
app.use(express.static('public'));
app.use(express.json({ limit: '5mb'}));




app.listen(port, console.log(`listening on port ${port}...`));