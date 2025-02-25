'use strict';

const bootstrap = require('./server/bootstrap');
const register = require('./server/register');
const services = require('./server/services');
const routes = require('./server/routes');
const config = require('./server/config');
const controllers = require('./server/controllers');

module.exports = () => {
  return {
    bootstrap,
    register,
    routes,
    config,
    controllers,
    services,
  };
};
