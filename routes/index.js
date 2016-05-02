
var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);

// Import Route Controllers
var routes = {
	controllers: importRoutes('./controllers'),
	auth: importRoutes('./auth')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	
	// Views
	app.get('/', routes.controllers.index);
	app.get('/profile', 
		// middleware works
		function(req, res, next){ console.log('profile middleware invoked'); next(); },
		routes.controllers.profile)
	
	// Authentication
	app.all('/auth/confirm', function(req, res, next){ console.log('profile middleware invoked on confirm route'); next(); }, routes.auth.confirm);
	app.all('/auth/app', routes.auth.app);
	app.all('/auth/:service', routes.auth.service);
};