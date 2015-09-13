'use strict';

angular.module('directives', ['underscore']).directive('colorParser', function($window) {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      scope.eggClasses = ['cn', 'kitteh'];

      // Check user input against our easter eggs
      scope.knownEgg = function(userInput) {
        return ((userInput.match(/(chuck\s*norris)/i)) ||
        (userInput.match(/(donald\s*trump)/i)) || (userInput.match(/(kitteh)/i)))  ? true : false;
      };
      // Apply special egg styling
      scope.applyEgg = function(userInput) {
        if (userInput.match(/(chuck\s*norris)/i)){
          angular.element(document.querySelector('.color-display')).toggleClass('cn');
        }
        if (userInput.match(/(kitteh)/i)){
          angular.element(document.querySelector('.color-display')).toggleClass('kitteh');
        }
        if (userInput.match(/(donald\s*trump)/i)) {
          $window.open('http://paintwithdonaldtrump.com', '_blank');
        }
      };

      scope.$watch(attrs.ngModel, function() {
        if (scope.knownEgg(ngModel.$modelValue)){
          scope.applyEgg(ngModel.$modelValue);
        } else {
          // Toggle special styling if user has changed the input and
          // it's no longer matching any of the set easter eggs
          _.each(scope.eggClasses, function(eggClass){
            if (angular.element(document.querySelector('.color-display')).hasClass(eggClass)) {
              angular.element(document.querySelector('.color-display')).toggleClass(eggClass);
            }
          });

          angular.element(document.querySelector('.' + attrs.cpColorDisplay)).css('background-color', ngModel.$modelValue);
          angular.element(document.querySelector('.' + attrs.cpOutputDisplay)).css('color', ngModel.$modelValue);
        }
      });
    }
  };
});

