const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  const { body } = req;

  try {
    const newPost = await Post.create({ ...body,
      userId: req.session.userId });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

  router.put('/:id', withAuth, async (req, res) => {
    try {
      const [ affectedRows ] = await req.update(req.body, {
          where: {
            id: req.params.id,
          },
        });

      if (affectedRows > 0) {
        res.sendStatus(200).end();
      } else {
        res.sendStatus(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const [affectedRows] = Post.destroy({
        where: { 
          id: req.params.id,
         } 
        });

      if (affectedRows > 0) {
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;