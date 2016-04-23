var keystone = require('keystone');

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