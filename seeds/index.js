const sequelize = require('../config/connection');
const { Post, Comment, User } = require('../models');

const seedUsers = require('./userData');
const seedPosts = require('./postData');
const seedComments = require('./commentData');

const seedDatabase = async () => {
      await sequelize.sync({ force: true });

      await seedUsers();

      await seedPosts();

      await seedComments();


      process.exit(0);
};

seedDatabase();