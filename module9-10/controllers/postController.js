"use strict";
let Models = require("../models"); //matches index.js

const getPosts = (res) => {
    Models.Post.find({})
        .then(posts => res.send(posts))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createPost = (postPayload, res) => {
    new Models.Post(postPayload).save()
        .then(post => res.send(post))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const deletePost = (postId, res) => {
    Models.Post.findByIdAndRemove(postId)
        .then(deletedPost => {
            if (!deletedPost) {
                res.status(404).send({ result: 404, error: 'Post not found' });
            } else {
                res.status(200).send({ result: 200, message: 'Post deleted successfully' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};


module.exports = {
    getPosts, createPost, deletePost
}