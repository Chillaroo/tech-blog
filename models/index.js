//IMPORT MODELS
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User);
Comment.belongsTo(Post);
Comment.belongsTo(User);

User.hasMany(Post);
User.hasMany(Comment);
Post.hasMany(Comment);

module.exports = {
    User,
    Post,
    Comment
}
