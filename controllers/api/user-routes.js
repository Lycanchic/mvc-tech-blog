const router = require('express').Router
const { User } = require('../../models');

router.post("/", async (req, res) => {
    const { username, password } = req.body;

    try {
      const newUser = await User.create({ username, password });
  
      req.session.userId = newUser.id;
      req.session.userName = newUser.username;
      req.session.loggedIn = true;
  
      req.session.save(() => {
        res.json(newUser);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ where: { username } });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const isPasswordValid = await user.checkPassword(password);
  
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid password' });
      }
  
      req.session.userId = user.id;
      req.session.userName = user.username;
      req.session.loggedIn = true;
      await req.session.save();
  
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });

  try {
    // Check if user exists
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).json({ message: 'User account not found' });
    }
  
    // Check if password is correct
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }
  
    // Save session and return success message
    req.session.save((err) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.json({ user, message: 'You have successfully logged in' });
    });
  
  } catch (err) {
    res.status(500).json(err);
  }

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy((err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'Error logging out' });
        } else {
          res.status(204).end();
        }
      });
    } else {
      res.status(404).json({ message: 'No active session found' });
    }
  });

  module.exports = router