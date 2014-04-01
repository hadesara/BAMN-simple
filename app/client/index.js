'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('bamn').
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/index', {templateUrl: '/index', controller: LoginCtrl})
    //Add all other routes here
    .otherwise({redirectTo: '/index'});
    $locationProvider.html5Mode(true).hashPrefix('!');
  }]);