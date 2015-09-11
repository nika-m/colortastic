'use strict';

angular.module('colortasticApp.home', []);
angular.module('colortasticApp.alt', []);
angular.module('colortasticApp.alt2', []);

angular.module('colortasticApp', [
  'ui.router',
  'colortasticApp.home',
  'colortasticApp.alt',
  'colortasticApp.alt2'
])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'home/index.html',
      controller: 'HomeController'
    })
    .state('alt', {
      url: '/alternate',
      templateUrl: 'alt/index.html',
      controller: 'AltController'
    })
    .state('alt2', {
      url: '/alternate2',
      templateUrl: 'alt2/index.html',
      controller: 'Alt2Controller'
    })
      .state('cn', {
        url: '/chuck_norris',
        templateUrl: 'home/chuck_norris.html'
      });

    $urlRouterProvider.otherwise('/home');
});
