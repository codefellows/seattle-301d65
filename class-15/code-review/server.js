'use strict';

const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => res.render('index'));

app.post('/sendingData/:fromTheParams', (req,res) => {
  console.log('app.post I hit', 'app.post(\'/sendingData/:fromTheParams\'');
  console.log('url i hit', '/sendingData/fromTheParamsStuff?fromTheQuery=querystuf');
  console.log('my form', '<input type="text" name="fromTheBody" value="from the body stuff">');
  console.log('/sendingData/:fromTheParams', 'req.query', req.query);
  console.log('/sendingData/:fromTheParams', 'req.body', req.body);
  console.log('/sendingData/:fromTheParams', 'req.params', req.params);

  res.redirect('/');
});


// this is facebook
// profiles
// GET /profile/:id - see a person
// PUT /profile/:id - update yourself
// POST /profile - make new user
// DELETE /profile/:id - delete yourself
// GET /profile - see all profiles connected to you

// feed
// GET /posts - get all posts
// POST /posts - add a new post
// GET /posts/:id - get a single post
// PUT /posts/:id - edit your post
// DELETE /posts/:id - delete your post

// profiles

app.get('/profile', getAllProfiles);
app.get('/profile/:id'. getOneProfile);
app.post('/profile', addProfile);
app.put('/profile/:id', updateProfile);
app.delete('/profile/:id', deleteProfile);

app.get('/post', getAllPosts);
app.get('/post/:id'.getOnePost);
app.post('/post', addPost);
app.put('/post/:id', updatePost);
app.delete('/post/:id', deletePost);

function getAllProfiles(req, res) {
  // rendering all the profiles
  // console.log('/profile', 'req.query', req.query);
  // console.log('/profile', 'req.body', req.body);
  // console.log('/profile', 'req.params', req.params);
  res.render('index');
}

function getOneProfile(req, res) {
  // console.log('GET /profile/:id', 'req.query', req.query);
  // console.log('GET /profile/:id', 'req.body', req.body);
  // console.log('GET /profile/:id', 'req.params', req.params);
  res.render('profiles/detail');
}

function addProfile(req, res){
  res.redirect('/');
}

function deleteProfile(req, res) {
  // console.log('DELETE /profile/:id', 'req.query', req.query);
  // console.log('DELETE /profile/:id', 'req.body', req.body);
  // console.log('DELETE /profile/:id', 'req.params', req.params);
  res.redirect('/');
}

function updateProfile(req, res){
  // console.log('PUT /profile/:id', 'req.query', req.query);
  // console.log('PUT /profile/:id', 'req.body', req.body);
  // console.log('PUT /profile/:id', 'req.params', req.params);
  res.redirect('/');
}





app.listen(3000, () => console.log('we are up'));
