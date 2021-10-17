const sequelize = require('../config/connection');
const { Post, Comment, User } = require('../models');

const seedPosts = require('./postData.json');
const seedComments = require('./commentData.json');
const seedUsers = require('./userData.json');

const seedDatabase = async () => {
      await sequelize.sync({ force: true });

      await seedPosts();

      await seedComments();

      await seedUsers();

      process.exit(0);
};

seedDatabase();