const express = require('express')
const app = express()
const port = 3000
const urlRoutes = require('./routes/urlroutes');
const userRoute = require('./routes/userRoute');
const {connectDB} = require('./helper/connectdb');
const {restrictToLoggedInUserOnly,authCheck} = require('./middleware/auth');
const cookieParser = require("cookie-parser");
const staticRoute = require('./routes/staticRoute')
//mongodb+srv://amarkounsal:amar2002@cluster0.tzrvj.mongodb.net/urlshort?retryWrites=true&w=majority&appName=Cluster0
connectDB("mongodb://localhost:27017/short-url")
.then(() => console.log('Connected to DB'))
.catch((e)=>{console.log(e)});
app.use(cookieParser());
app.use(express.json());
app.use('/url', restrictToLoggedInUserOnly, urlRoutes);
app.use('/user',userRoute);
app.use('/',authCheck,staticRoute);
// app.get('/',(res,req)=>{res.end("hekklos")});
// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))