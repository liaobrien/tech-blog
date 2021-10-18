const { Comment } = require('../models');

const commentdata = [
      {
            comment_text: "Welcome, glad to have you!",
            post_id: 1,
            user_id: 4
      },
      {
            comment_text: "I've heard Materialize is a good framework. I've been meaning to check it out.",
            post_id: 2,
            user_id: 5
      },
      {
            comment_text: "Bootstrap is the best, other frameworks wish it were like them.",
            post_id: 2,
            user_id: 1
      },
      {
            comment_text: "Personally I prefer working in the front end, but if you really like back end, there's a lot of job opportunities in the field!",
            post_id: 3,
            user_id: 2
      }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;