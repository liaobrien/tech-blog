const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// GET all posts on the homepage
router.get('/', async (req, res) => {
      try {
            // will need to emebellish on this
            const allPosts = await Post.findAll();
            res.render(allPosts);
      } catch (err) {
            console.log(err);
            res.status(500).json(err);
      }
});

// GET one post
router.get('/post/:id', async (req, res) => {
      try {
            const postData = await Post.findbyPk(req.params.id);
      } catch (err) {
            console.log(err);
            res.status(500).json(err);
      }
})

// login route
router.get('/login', (req, res) => {
      // If the user is already logged in, redirect to the homepage
      if (req.session.loggedIn) {
            res.redirect('/');
            return;
      }
      // Otherwise, render the 'login' template
      res.render('login');
});

module.exports = router;