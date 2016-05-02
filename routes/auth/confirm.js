var keystone = require('keystone'),
	async = require('async'),
	request = require('request'),
	_ = require('lodash'),
	User = keystone.list('User');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	
	// // Function to handle signin
	// var doSignIn = function() {
	
	// 	console.log('[auth.confirm] - Signing in user...');
	// 	console.log('------------------------------------------------------------');
		
		var onSuccess = function(user) {
			console.log('[auth.confirm] - Successfully signed in.');
			console.log('------------------------------------------------------------');
			return res.redirect('/profile');
		}
		
		var onFail = function(err) {
			console.log('[auth.confirm] - Failed signing in.', err);
			console.log('------------------------------------------------------------');
			req.flash('error', 'Sorry, there was an issue signing you in, please try again.');
			return res.redirect('/');
		}
		
		keystone.session.signin(String(locals.existingUser._id), req, res, onSuccess, onFail);
	
	// }
	
	// // Function to handle data confirmation process
	// var checkAuth = function() {
	
	// 	async.series([
			
	// 		// Create or update user
	// 		function(next) {
			
				
	// 				console.log('[auth.confirm] - Existing user found, updating...');
	// 				console.log('------------------------------------------------------------');
					
					
	// 				_.extend(userData.services[locals.authUser.type], {
	// 					isConfigured: true,
						
	// 					profileId: locals.authUser.profileId,
						
	// 					username: locals.authUser.username,
	// 					avatar: locals.authUser.avatar,
						
	// 					accessToken: locals.authUser.accessToken,
	// 					refreshToken: locals.authUser.refreshToken
	// 				});
					
					
	// 				locals.existingUser.set(userData);
					
	// 				locals.existingUser.save(function(err) {
	// 					if (err) {
	// 						console.log('[auth.confirm] - Error saving existing user.', err);
	// 						console.log('------------------------------------------------------------');
	// 						return next({ message: 'Sorry, there was an error processing your account, please try again.' });
	// 					}
	// 					console.log('[auth.confirm] - Saved existing user.');
	// 					console.log('------------------------------------------------------------');
	// 					return next();
	// 				});
				
	// 			} else {
				
	// 				console.log('[auth.confirm] - Creating new user...');
	// 				console.log('------------------------------------------------------------');
					
	// 				var userData = {
	// 					name: {
	// 						first: locals.form['name.first'],
	// 						last: locals.form['name.last']
	// 					},
	// 					email: locals.form.email,
						

						
	// 					services: {}
	// 				};
					
	// 				userData.services[locals.authUser.type] = {
	// 					isConfigured: true,
						
	// 					profileId: locals.authUser.profileId,
						
	// 					username: locals.authUser.username,
	// 					avatar: locals.authUser.avatar,
						
	// 					accessToken: locals.authUser.accessToken,
	// 					refreshToken: locals.authUser.refreshToken
	// 				}
					
	// 				// console.log('[auth.confirm] - New user data:', userData );
					
	// 				locals.existingUser = new User.model(userData);
					
	// 				locals.existingUser.save(function(err) {
	// 					if (err) {
	// 						console.log('[auth.confirm] - Error saving new user.', err);
	// 						console.log('------------------------------------------------------------');
	// 						return next({ message: 'Sorry, there was an error processing your account, please try again.' });
	// 					}
	// 					console.log('[auth.confirm] - Saved new user.');
	// 					console.log('------------------------------------------------------------');
	// 					return next();
	// 				});
					
	// 			}
			
	// 		},
			
	// 		// Session
	// 		function() {
	// 			if (req.user) {
	// 				console.log('[auth.confirm] - Already signed in, skipping sign in.');
	// 				console.log('------------------------------------------------------------');
	// 				return res.redirect(req.cookies.target || '/me');
	// 			}
	// 			return doSignIn();
	// 		}
		
	// 	], function(err) {
	// 		if (err) {
	// 			console.log('[auth.confirm] - Issue signing user in.', err);
	// 			console.log('------------------------------------------------------------');
	// 			req.flash('error', err.message || 'Sorry, there was an issue signing you in, please try again.');
	// 			return res.redirect('/');
	// 		}
	// 	});
	
	// }
	
	// view.on('init', function(next) {
	// 	return checkExisting(next);
	// });
	
	// view.on('post', { action: 'confirm.details' }, function(next) {
	// 	if (!locals.form['name.first'] || !locals.form['name.last'] || !locals.form.email) {
	// 		req.flash('error', 'Please enter a name & email.');
	// 		return next();
	// 	}
	// 	return checkAuth();
	// });
	
	view.render('profile');
	
}