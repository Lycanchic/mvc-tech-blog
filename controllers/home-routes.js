const router = require("express").Router();
const { Post, Comment, User } = require("../../models/");

// For a single post
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("all-posts", { posts });
  } catch (err) {
    res.status(500).json({ error: "Not able to retrieve posts" });
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User },
        { model: Comment, include: [{ model: User }] },
      ],
    });
    const post = postData.get({ plain: true });
    res.render("single-post", { post });
  } catch (err) {
    res.status(500).json({ error: "Not able to retrieve the post" });
  }
});

try {
  if (postData) {
    const post = postData.get({ plain: true });
    res.render("single-post", { post });
  } else {
    res.status(404).end();
  }
} catch (err) {
  res.status(500).json({ error: err.message });
}

// Middleware to check if user is logged in
function checkIfLoggedIn(req, res, next) {
  if (req.session.loggedIn) {
    res.redirect("/");
  } else {
    next();
  }
}

// Routes
router.get("/login", checkIfLoggedIn, (req, res) => {
  res.render("login");
});

router.get("/signup", checkIfLoggedIn, (req, res) => {
  res.render("signup");
});

module.exports = router;
