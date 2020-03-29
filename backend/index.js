require('./config/config');

//Framework
const express = require('express');

//Middlewares
const bodyParser = require('body-parser');
const cors = require('cors');
var rtsIndex = require('./routes/sendEmail');

var app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: true}));
app.use('/v1',rtsIndex);

//Start Server
app.listen(process.env.PORT, () => console.log(`server started at port : ${process.env.PORT}`));
