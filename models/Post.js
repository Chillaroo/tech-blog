const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection.js');
const User = require('./User');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            references: {
                model: User,
                key: 'name'
            }
        },
        date_created: {
            type: DataTypes.DATEONLY,
            defaultValue: Sequelize.NOW
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