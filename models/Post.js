const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Post extends Model {
}

Post.init(
      {
            id: {
                  type: DataTypes.INTEGER,
                  allowNull: false,
                  primaryKey: true,
                  autoIncrement: true,
            },
            title: {
                  type: DataTypes.STRING,
                  allowNull: false,
            },
            content: {
                  type: DataTypes.STRING,
                  allowNull: false,
            },
            // i'm totally guessing on this column
            user_id: {
                  type: DataTypes.INTEGER,
                  references: {
                        model: 'user',
                        key: 'id'
                  }
            },
            post_date: {
                  type: DataTypes.DATE,
                  allowNull: false
            }
      },
      {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'post',
      }
);

module.exports = Post;