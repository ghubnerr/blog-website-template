require('dotenv').config()  

const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const mongoose = require('mongoose')
const _ = require('lodash')
const Post = require('./models/post.js')
const post = require('./models/post.js')

// TODO: Refactor landpage

const homeStartingContent = "Anim fugiat ipsum pariatur do amet aute labore ipsum veniam commodo ex quis. Duis consectetur culpa aliquip officia adipisicing qui. Nisi velit nisi fugiat qui culpa ullamco ipsum do esse reprehenderit nulla. Quis qui velit eu est enim ad est veniam voluptate ut aliquip mollit cupidatat. Esse labore amet sint veniam proident sit officia veniam commodo sint reprehenderit commodo aute. Anim minim quis quis irure commodo sunt fugiat minim. Commodo pariatur ipsum dolor sunt voluptate amet velit commodo sunt aliqua ad anim."

const aboutStartingContent = 'Consequat ea consectetur reprehenderit sint. Consequat ullamco quis laboris consequat est eiusmod nulla labore et. Voluptate labore quis eu cupidatat deserunt dolor et aliqua veniam quis. Ut proident quis nulla cupidatat ad.'

const contactStartingContent = 'Nulla duis commodo eiusmod excepteur culpa nostrud sit ipsum eiusmod sint nulla voluptate sit. Esse minim tempor enim exercitation proident ullamco occaecat. Velit laborum mollit do amet proident ut aliquip sint labore duis consequat quis culpa ex.'


const app = express()
const PORT = process.env.PORT || 3000 

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});
        console.log(`MongoDB connected: ${connect.connection.host}`)
    }
    catch (error) {
        console.log(error)
        process.exit(1);
    }
}


app.get('/', (req,res) =>{
    Post.find({}).then((posts)=>{
        res.render('home', {
            homeStartingContent: homeStartingContent, 
            posts: posts
        })
    })
    .catch((error)=>{
        console.log(error)
    })
});

app.get('/about', function(req,res){
    res.render('about', {aboutStartingContent: aboutStartingContent})
})

app.get('/contact', function(req,res){
    res.render('contact', {contactStartingContent: contactStartingContent})
})

app.get('/compose', function(req,res){
    res.render('compose')
})

app.post('/compose', function(req,res){
    const post = new Post ({
        title: req.body.title,
        content: req.body.content
    })
    post.save().then(()=>{
        res.redirect('/')
    })
    .catch((error)=>{
        console.log(error)
    })
});

app.get('/posts/:postId', (req, res) => {
    const requestedPostId = req.params.postId

    Post.findOne({_id: requestedPostId}).then((post)=>{
        res.render('post', {postTitle: post.title, postBody: post.content})
    })
    .catch((error)=>{
        console.log(error)
    })
})

connectDB().then(()=> {
    app.listen(PORT, () => {
        console.log(`Server is up and Running on port ${PORT}`)
    })
})
.catch((error)=>{
    console.log('Failed to connect to database')
    console.log(error)
});