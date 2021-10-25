const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// I think I will need the following requests:
// GET the logged in user's posts
// router.get('/', withAuth, async (req, res) => {
//       try {
//             const dbPostData = await Post.findAll({
//                   where: {
//                         user_id: req.session.user_id
//                   },
//                   include: [
//                         {
//                               model: User,
//                               attributes: ['username']
//                         }
//                   ]
//             });
//             console.log(dbPostData);

//             const posts = dbPostData.map((post) => post.get({ plain: true }));
//             console.log(posts);
//             res.render('dashboard', {
//                   posts, loggedIn: true
//             });
//       } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//       }

// });

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

// POST a new post


// PUT (update) a user's post


// DELETE a user's post

module.exports = router;