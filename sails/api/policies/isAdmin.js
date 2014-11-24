/**
 * isAdmin
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {
  if (!req.session.passport) return res.forbidden();

  User.findOneById(req.session.passport.user, function(err, user) {
    if (err) return next(err);

    // @todo: find a better way to identify the admin.
    if (user && user.email == 'diogo@taller.net.br') return next();

    res.forbidden();
  });
};
