const express = require('express');
const cors = require('cors');
const app = express();
require('./src/db/dbConnection')

const bodyParser = require('body-parser');

app.use(express.json());
// app.use(cors());
app.use(cors());


// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });


const todoBase = require('./src/routes/TodoRoutes')
app.use('/native',todoBase);


app.listen(2080, () => {
    console.log("server is running at port number 2080")
})