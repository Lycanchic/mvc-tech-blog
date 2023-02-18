const router = require("express").Router();
const express = require("express");
const userRoutes = require("./userRoutes");

const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes.js");
const commentRoutes = require("./comment-routes.js");

router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

router.use("./user", userRoutes);

module.exports = router;
