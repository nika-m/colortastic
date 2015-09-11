'use strict';

angular.module('colortasticApp.home').controller('HomeController', function($scope) {
  $scope.colorInput = '';

  $scope.changeStyles = function(colorInput){
    $scope.borderColor = { 'background-color': colorInput };
    $scope.fontColor = { color: colorInput };
  };
});
