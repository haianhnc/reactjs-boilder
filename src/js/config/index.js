/* eslint global-require: "off" */

switch (process.env.NODE_ENV) {
  case 'dev': {
    module.exports = require('./dev');
    break;
  }

  case 'alpha': {
    module.exports = require('./alpha');
    break;
  }

  case 'beta': {
    module.exports = require('./beta');
    break;
  }

  case 'production': {
    module.exports = require('./production');
    break;
  }

  default:
    break;
}
