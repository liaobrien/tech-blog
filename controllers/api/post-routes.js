const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// I need the following routes:

// POST a new post
router.post('/', async (req, res) => {
      try {
            const postData = await Post.create({
                  title: req.body.title,
                  content: req.body.content,
                  user_id: req.session.user_id,
            });
            res.status(200).json(postData);
      } catch (err) {
            console.log(err);
            res.status(400).json(err);
      }
});

// PUT (update) a post
router.put('/:id', async (req, res) => {
      try {
            const postData = await Post.update(req.body, {
                  where: {
                        id: req.params.id,
                  }
            });
            if (!postData[0]) {
                  res.status(404).json({ message: 'No post with this id!' });
                  return;
            }
            res.status(200).json(postData);
      } catch (err) {
            console.log(err);
            res.status(500).json(err);
      }
});

// DELETE a post
// router.delete('/:id')

module.exports = router;