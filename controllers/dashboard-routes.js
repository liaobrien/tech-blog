const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// GET logged in user's posts
router.get('/', withAuth, async (req, res) => {
      try {
            const dashboard = await Post.findAll({
                  where: {
                        user_id: req.session.user_id
                  },
                  attributes: [
                        'id',
                        'title',
                        'content',
                        'post_date'
                  ],
                  include: [
                        {
                              model: User,
                              attributes: ['username']
                        }
                  ]
            });
            // maps all the posts in an array and then renders them to the dashboard 
            const posts = dashboard.map(post => post.get({ plain: true }));

            res.render('dashboard', { posts, loggedIn: true });
      }

      catch (err) {
            console.log(err);
            res.status(500).json(err);
      };
});

// GET the edit/delete post page (completely aside from actually updating/deleting for now)
router.get('/edit/:id', withAuth, async (req, res) => {
      try {
            const editPost = await Post.findOne({
                  where: {
                        id: req.params.id
                  },
                  attributes: ['id',
                        'title',
                        'content'
                  ],
            });

            if (!editPost) {
                  res.status(404).json({ message: 'No post found with this id!' });
                  return;
            }

            const post = editPost.get({ plain: true });
            res.render('edit-post', { post, loggedIn: true });
      }

      catch (err) {
            console.log(err);
            res.status(500).json(err);
      };
});

module.exports = router;