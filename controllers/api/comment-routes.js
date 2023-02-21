const router = require('express').Router();
const withAuth = require("../../utils/Auth");
const { Comment } = require("../../models/");

router.post('/', withAuth, async (req, res) => {
  const { body, session } = req;
  try {
    const newComment = await Comment.create({
      ...body,
      userId: session.userId,
    });
    res.status(201).json(newComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occured" });
  }
});

module.exports = router;
