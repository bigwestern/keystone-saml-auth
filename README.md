# Github Auth with Keystone.js

> Make your own application with Keystone.js. Lightweight starting point for building with Keystone

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