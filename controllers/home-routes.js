const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts on the homepage
router.get('/', async (req, res) => {
      try {
            const postData = await Post.findAll({
                  include: [
                        {
                              model: User,
                              attributes: ['username'],
                        },
                  ],
            });
            const posts = postData.map((post) =>
                  post.get({ plain: true })
            );
            res.render('homepage', {
                  posts,
                  loggedIn: req.session.loggedIn
            });
      } catch (err) {
            console.log(err);
            res.status(500).json(err);
      }
});

// GET one post
router.get('/post/:id', withAuth, async (req, res) => {
      try {
            const dbPostData = await Post.findbyPk(req.params.id, {
                  include: [
                        {
                              model: Comment,
                              attributes: [
                                    'id',
                                    'comment_text',
                                    'post_id',
                                    'user_id',
                                    'comment_date',
                              ],
                        },
                  ],
            });
            const post = dbPostData.get({ plain: true });
            // Send over the 'loggedIn' session variable to the 'post' template
            res.render('post', { post, loggedIn: req.session.loggedIn });
      } catch (err) {
            console.log(err);
            res.status(500).json(err);
      }
})

// may or may not need another GET here

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