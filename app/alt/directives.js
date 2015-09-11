'use strict';

angular.module('colortasticApp.alt').directive('ctColorParser', function() {
  return {
    require: 'ngModel',
    scope: true,
    link: function (scope, element, attrs, ngModel) {
      scope.$watch(attrs.ngModel, function() {
        angular.element(document.querySelector('.' + attrs.ctBorderDiv)).css('border-color', ngModel.$modelValue);
        angular.element(document.querySelector('.' + attrs.ctOutputDisplay)).css('color', ngModel.$modelValue);
        angular.element(document.querySelector('.' + attrs.ctColorDisplay)).css('background-color', ngModel.$modelValue);
      });
    }
  };
});
