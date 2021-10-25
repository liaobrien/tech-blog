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
            }) //runs a get query to get all of users previous posts.
            const generateDash = await dashboard
            const posts = generateDash.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: true }); //maps all the posts in an array and then renders them to the dashboard 
      }

      catch (err) {
            console.log(err);
            res.status(500).json(err);
      };
});

// GET the edit/delete post page
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

            const newEdit = await editPost
            if (!newEdit) {
                  res.status(404).json({ message: 'No post found with this id!' });
                  return;
            }

            const post = newEdit.get({ plain: true });
            res.render('edit-post', { post, loggedIn: true });
      }

      catch (err) {
            console.log(err);
            res.status(500).json(err);
      };
})



// PUT (update) a user's post


// DELETE a user's post

module.exports = router;