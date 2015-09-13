'use strict';

angular.module('colortasticApp', [
  'ui.router',
  'underscore',
  'directives',
  'home',
  'alt'
])
.constant('_', window._)

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .state('alt', {
      url: '/alternate',
      templateUrl: 'views/alt.html',
      controller: 'AltController'
    });

    $urlRouterProvider.otherwise('/home');
})

.run(function ($rootScope) {
    $rootScope._ = window._;
  });
