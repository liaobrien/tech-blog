const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// I think I will need the following requests:
// GET the logged in user's posts
router.get('/', withAuth, async (req, res) => {
      try {
            const dbPostData = await Post.findAll({
                  where: {
                        user_id: req.session.id
                  },
                  include: [
                        {
                              model: User,
                              attributes: ['username']
                        }
                  ]
            });
            console.log(dbPostData);

            const posts = dbPostData.map((post) => post.get({ plain: true }));
            console.log(posts);
            res.render('dashboard', {
                  layout: 'main',
                  posts
            });
      } catch (err) {
            console.log(err);
            res.status(500).json(err);
      }

});

// POST a new post


// PUT (update) a user's post


// DELETE a user's post

module.exports = router;