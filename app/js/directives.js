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
  			content: '=content'
  		},
  		templateUrl: 'partials/right-pane.html'
  	};
  });