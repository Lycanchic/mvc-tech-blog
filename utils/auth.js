// Middleware function to require authentication
const withAuth = (req, res, next) => {
  // Check if the user is authenticated
  if (!req.session.userId) {
    // Redirect to the login page if the user is not authenticated
    res.redirect("/login");
  }

  // Call the next middleware function in the stack
  next();
};

module.exports=withAuth;