const express = require('express'); 
const app = express();
const dotenv = require('dotenv')
const mongoose =require('mongoose')
dotenv.config();
app.use(express.json());
const jwt = require("jsonwebtoken")
const path = require('path')

//Routes
const postRoute = require('./routes/posts')
const NewsRoute = require('./routes/news')
const JobRoute = require('./routes/jobs')
const ContactRoute = require('./routes/contact')
const UserRoute = require('./routes/auth')

mongoose.connect(process.env.MONGO_URL,  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("connected to MongoDB"))
.catch((err)=> console.log(err));

//use routes
app.use('/posts', postRoute)
app.use('/news', NewsRoute)
app.use('/jobs', JobRoute)
app.use('/contact', ContactRoute)
app.use('/users', UserRoute)

app.use(express.static(path.join(__dirname, "/Client")));

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, '/Client/build', 'index.html'))
})

app.listen(process.env.PORT || 5000, ()=> {
    console.log(`listening on port ${process.env.PORT || 5000}`)
})