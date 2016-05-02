# Github Auth with Keystone.js

A lightweight Keystone.js server with authentication via Passport

### Requirements

- Sign in with Github button
- Authenticate users via Github OAuth2
- If user has not signed in before, create a new user in database
- If user has signed in before log the user in
- profile page is only accessible to logged in users
- after successful log in user is redirected to profile page

### Technologies

- [Keystone.js](http://keystonejs.com/)
- Passport.js && [passport-github](https://github.com/jaredhanson/passport-github)
- Jade
- jQuery and Bootstrap
- Bower

Right now using connect-mongo for session storage. ES5/ES6 [issue](https://github.com/kcbanner/connect-mongo/issues/209).

```
$ node -v && mongo --version
v6.0.0
MongoDB shell version: 3.2.6
```

### Getting Started

Run `mongod` in one terminal. Open a new terminal:

```
$ git clone git@github.com:cleechtech/keystone-starter-custom.git
$ cd keystone-starter-custom
$ npm i
$ node server
```

Open up to `localhost:3000`.
