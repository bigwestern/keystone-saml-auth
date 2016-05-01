var keystone = require('keystone');
var passport = require('passport');

keystone.init({

    'name': 'Keystone Starter',
    'brand': 'Project',

    'less': 'public',
    'static': 'public',

    'views': 'templates/views',
    'view engine': 'jade',

    'auth': true,
    'session': true,
    'session store': 'mongo', // this might through some ES6 related errors. Make sure you have latest node version installed
    'user model': 'User',
    'cookie secret': process.env.COOKIE_SECRET || 'keystoneStarterSecret',

    'auto update': false

});

keystone.import('models');

// passport config
// keystone.pre('routes', passport.initialize());
// keystone.pre('routes', passport.session());

keystone.set('routes', require('./routes'));

keystone.start();