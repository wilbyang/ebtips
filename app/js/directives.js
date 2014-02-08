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
      templateUrl: 'partials/my-item-container.html',
      restrict: 'E',
      replace: true,
      transclude: true,
      link: function(scope, elm, attrs) {
        scope.states = {};
        scope.states.selectedIndex = 0;

        var elem = angular.element(elm);
        scope.showMy = function() {
          console.log('ul:offsettop ' + elem.offset().top);
          console.log('ul:offsettop ul height' + elem.height());
          console.log('ul:scrollTop ' + elem.scrollTop());
          console.log('nav:offsettop paren: ' + elem.parent().offset().top);
          console.log('nav:scrollTop parent: ' + elem.parent().scrollTop());
        }
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