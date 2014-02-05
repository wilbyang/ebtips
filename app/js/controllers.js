'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ngSanitize', 'infinite-scroll']).
  controller('MyCtrl1', ['$scope', '$http', function($scope, $http) {

    $http.get('entries/entries.json').success(function(data) {
      $scope.entries = data;
      $scope.opened = data[0];
    });

    // $scope.selectedIndex = 0;

    $scope.itemClicked = function (entry) {
      // $scope.selectedIndex = $index;

      if (!$scope.isOpen(entry)) {
        $scope.opened = entry;
      };

    };

    $scope.isOpen = function(item) {
      return $scope.opened === item;
    };

  }])
  .controller('MyCtrl2', ['$scope', 'Reddit', function($scope, Reddit) {
    $scope.reddit = new Reddit();

    $scope.itemClicked = function ($index) {
      $scope.selectedIndex = $index;
      console.log($index);
      // $scope.entry = $scope.entries[$index];
    };
  }]);