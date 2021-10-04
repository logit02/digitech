const express = require('express'); 
const app = express();
const dotenv = require('dotenv')
const mongoose =require('mongoose')
dotenv.config();
app.use(express.json());

//Routes
const postRoute = require('./routes/posts')

mongoose.connect(process.env.MONGO_URL,  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("connected to MongoDB"))
.catch((err)=> console.log(err));

app.use('/backend/posts', postRoute)

app.listen(process.env.PORT || 5000, ()=> {
    console.log(`listening on port ${process.env.PORT || 5000}`)
})