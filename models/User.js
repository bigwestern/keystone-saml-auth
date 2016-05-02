var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var User = new keystone.List('User');

User.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true }
});

// Provide access to Keystone
// User.schema.virtual('canAccessKeystone').get(function() {
// 	return this.isAdmin;
// });


/**
 * Relationships
 */

// User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */

User.register();
