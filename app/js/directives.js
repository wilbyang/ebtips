'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('myContent', function() {
  	return {
  		restrict: 'E',
  		scope: {
  			content: '='
  		},
  		templateUrl: 'partials/right-pane.html'
  	};
  })
  .directive('myItemContainer', function() {
    return {
      template: '<ul class="list-group all" ng-transclude></ul>',
      restrict: 'E',
      replace: true,
      transclude: true,
      link: function(scope, elm, attrs) {
        scope.states = {};
        scope.states.selectedIndex = 0;
      }
    };
  })
  .directive('myItem', function() {
  	return {
  		templateUrl: 'partials/my-item.html',
  		restrict: 'E',
  		replace: true,
  		transclude: true
  	};
  });