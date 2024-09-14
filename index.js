const express = require('express')
const app = express()
const port = 3000
const urlRoutes = require('./routes/urlroutes');
const {connectDB} = require('./helper/connectdb');
const Url = require('./models/url');
connectDB('mongodb+srv://amarkounsal:amar2002@cluster0.tzrvj.mongodb.net/urlshort?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Connected to DB'))
.catch((e)=>{console.log(e)});
app.use(express.json());
app.use('/', urlRoutes);
// app.get('/',(res,req)=>{res.end("hekklos")});
// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))