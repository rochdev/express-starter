# Express Starter

[![Greenkeeper badge](https://badges.greenkeeper.io/rochdev/express-starter.svg)](https://greenkeeper.io/)

A simple boilerplate for Express based APIs

## How to use

Start your project by cloning this repo and removing its git reference.

```sh
git clone https://github.com/rochdev/express-starter.git
rm -rf .git
```

Then simply make sure to update the `package.json`, `README.md` and `LICENSE` files.

## What's included

* Basic API middleware ([cors](https://github.com/expressjs/cors), [body-parser](https://github.com/expressjs/body-parser), [compression](https://github.com/expressjs/compression))
* Basic error handling middleware
* Validation using [Celebrate](https://github.com/continuationlabs/celebrate) and [Joi](https://github.com/hapijs/joi)
* Logging with [bunyan](https://github.com/trentm/node-bunyan)
* ESLint with [standard](https://github.com/feross/eslint-config-standard) configuration
* Unit testing using [mocha](https://mochajs.org/), [chai](http://chaijs.com/), [sinon](http://sinonjs.org/), [proxyquire](https://github.com/thlorenz/proxyquire) and [supertest](https://github.com/visionmedia/supertest)
* Code coverage using [Istanbul](https://istanbul.js.org/)
* Support for [Travis CI](https://travis-ci.org/), [Codecov](https://codecov.io/) and [wallaby.js](https://wallabyjs.com/)
* Automatic server restart on file change using [nodemon](https://nodemon.io/)
* A Dockerfile configured according to the [best practices](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)
