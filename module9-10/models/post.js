const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId: {type: String},
    title: {type: String},
    description: {type: String},
    imageUrl: {type: String},
    like: {type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;
