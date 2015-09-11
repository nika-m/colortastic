'use strict';

angular.module('colortasticApp.alt').directive('ctColorParser', function($state) {
  return {
    require: 'ngModel',
    link: function ($scope, element, attrs, ngModel) {
      $scope.$watch(attrs.ngModel, function() {
        if (ngModel.$modelValue.match(/(chuck\s*norris)/i)){
          $state.go('cn');
        }

        angular.element(document.querySelector('#' + attrs.ctBorderDiv)).css('border-color', ngModel.$modelValue);
        angular.element(document.querySelector('#' + attrs.ctOutputDisplay)).css('color', ngModel.$modelValue);
      });
    }
  };
});
