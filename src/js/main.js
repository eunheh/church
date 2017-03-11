import angular from 'angular';

import { SERVER } from './server';

import './app.core';
// import './app.events';
// import './app.teachings';
// import './app.worship';

angular
  .module('app', ['app.core'])
  // ,'app.events', 'app.teachings', 'app.worship'
  .constant('SERVER', SERVER);
