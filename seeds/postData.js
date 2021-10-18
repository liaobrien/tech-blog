const { Post } = require('../models')

const postdata = [
      {
            title: "Hello World",
            content: "This is my first blog post! I can't wait to share my passion for tech on here.",
            user_id: 1
      },
      {
            title: "Best CSS Framework?",
            content: "The only CSS frameworks I've used are Bootstrap and Bulma. What are some others I should learn?",
            user_id: 2
      },
      {
            title: "Front end vs. Back end",
            content: "After learning both front end and back end development, I can't decide which one I like doing more! Front end is fun because you can make a page really pretty, while with back end you can truly bring an app to life.",
            user_id: 3
      }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;