const sequelize = require('../config/connection');
const { Post, Comment, User } = require('../models');

const seedPosts = require('./postData');
const seedComments = require('./commentData');
const seedUsers = require('./userData');

const seedDatabase = async () => {
      await sequelize.sync({ force: true });

      await seedPosts();

      await seedComments();

      await seedUsers();

      process.exit(0);
};

seedDatabase();