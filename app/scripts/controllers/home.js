'use strict';

angular.module('home', []).controller('HomeController', function($scope) {
  $scope.colorInput = '';

  // Set background/font color using ngStyle
  $scope.changeStyles = function(colorInput){
    $scope.borderColor = { 'background-color': colorInput };
    $scope.fontColor = { color: colorInput };
  };
});
