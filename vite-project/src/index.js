const { json } = require('express');
const express = require('express');
const morgan = require("morgan");
const app = express();

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Static files
app.use('/api',require('./routes/task.routes'))


//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})