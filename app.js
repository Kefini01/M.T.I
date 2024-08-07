const express = require('express');
const app = express();
app.use(express.static('public'));   
const apiRouter = require('./api');
app.use('/api', apiRouter);
app.listen(3000, () => {
       console.log('Server started on port 3000');
     });