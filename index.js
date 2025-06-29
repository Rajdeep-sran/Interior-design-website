// npx nodemon index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/rajdeep');
//   console.log('db connected');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const User = mongoose.model('User', userSchema);


const server = express();

server.use(cors());
server.use(bodyParser.json());

server.post('/demo',async(req,res)=>{
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.message = req.body.message;
    const doc = await user.save();
    console.log(doc);
    res.json(doc);
})

server.get('/demo',async(req,res)=>{
    const docs = await User.find({});
    res.json(docs)
})

server.listen(8080, ()=>{
    console.log('server started')
})
//C:\Program Files\MongoDB\Server\8.0\data\0