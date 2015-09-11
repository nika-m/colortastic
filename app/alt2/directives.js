'use strict';

angular.module('colortasticApp').directive('ctColorParser', function() {
  return {
    require: 'ngModel',
    scope: true,
    link: function (scope, element, attrs, ngModel) {
      scope.$watch(attrs.ngModel, function() {
        if (ngModel.$modelValue.match(/(chuck\s*norris)/i)){
          angular.element(document.querySelector('.' + attrs.ctBorderDiv)).css('background-image', "url('assets/images/chucknorris.jpg')");
        }
        angular.element(document.querySelector('.' + attrs.ctBorderDiv)).css('border-color', ngModel.$modelValue);
        angular.element(document.querySelector('.' + attrs.ctOutputDisplay)).css('color', ngModel.$modelValue);
      });
    }
  };
});
