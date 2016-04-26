var keystone = require('keystone');
var passport = require('passport');
var Strategy = require('passport-github').Strategy;

// Configure the Github strategy for use by Passport.
//
// OAuth 2.0-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Github API on the user's
// behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(new Strategy({
    clientID: '4fad542442f230983dfa', // process.env.CLIENT_ID,
    clientSecret: '64e33995a9caf57be861272d4931d60a678c42c2', // process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/login/github/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    // In this example, the user's Github profile is supplied as the user
    // record.  In a production-quality application, the Github profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    return cb(null, profile);
  }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Twitter profile is serialized
// and deserialized.
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

keystone.init({

    'name': 'Keystone Starter',
    'brand': 'Project',

    'less': 'public',
    'static': 'public',

    'views': 'templates/views',
    'view engine': 'jade',

    'auth': true,
    'user model': 'User',
    'cookie secret': 'keystoneStarterSecret',

    'auto update': false

});

keystone.import('models');



keystone.set('routes', require('./routes'));

keystone.start();