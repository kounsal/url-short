const express = require('express')
const app = express()
const port = 3000
const urlRoutes = require('./routes/urlroutes');
const {connectDB} = require('./helper/connectdb');
const Url = require('./models/url');
connectDB('mongodb://localhost:27017/urlshortener')
.then(() => console.log('Connected to DB'));
app.use(express.json());
app.use('/', urlRoutes);

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))