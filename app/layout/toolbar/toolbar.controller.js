(function () {
  'use strict';

  angular
    .module('myApp')
    .controller('ToolbarController', [
      'localStorageService', '$rootScope', '$scope', '$window',
      function (localStorageService, $rootScope, $scope, $window) {
        var self = this;

      }
    ]);

})();