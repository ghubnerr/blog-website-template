const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const _ = require('lodash')

const homeStartingContent = "Anim fugiat ipsum pariatur do amet aute labore ipsum veniam commodo ex quis. Duis consectetur culpa aliquip officia adipisicing qui. Nisi velit nisi fugiat qui culpa ullamco ipsum do esse reprehenderit nulla. Quis qui velit eu est enim ad est veniam voluptate ut aliquip mollit cupidatat. Esse labore amet sint veniam proident sit officia veniam commodo sint reprehenderit commodo aute. Anim minim quis quis irure commodo sunt fugiat minim. Commodo pariatur ipsum dolor sunt voluptate amet velit commodo sunt aliqua ad anim."

const aboutStartingContent = 'Consequat ea consectetur reprehenderit sint. Consequat ullamco quis laboris consequat est eiusmod nulla labore et. Voluptate labore quis eu cupidatat deserunt dolor et aliqua veniam quis. Ut proident quis nulla cupidatat ad.'

const contactStartingContent = 'Nulla duis commodo eiusmod excepteur culpa nostrud sit ipsum eiusmod sint nulla voluptate sit. Esse minim tempor enim exercitation proident ullamco occaecat. Velit laborum mollit do amet proident ut aliquip sint labore duis consequat quis culpa ex.'

let posts = []

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))

app.get('/', function(req,res){
    res.render('home', {
        homeStartingContent: homeStartingContent, 
        posts: posts
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
    let post = {
        title: req.body.postTitle,
        body: req.body.postBody
    }
    posts.push(post)

    res.redirect('/')
});

app.get('/posts/:postName', (req, res) => {
    const postNameReq = _.lowerCase(req.params.postName)

    posts.forEach((post) => {

        const postTitle = _.lowerCase(post.title)

        if ( postTitle === postNameReq) {
            res.render('post', {postTitle: post.title, postBody: post.body })
        }
    })
})

app.listen(3000, () => {
    console.log("Server is up and Running")
})