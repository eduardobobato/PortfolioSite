(function () {
  'use strict';

  angular
    .module('myApp')
    .controller('ToolbarController', [
      'localStorageService', '$rootScope', '$scope', '$window', 'LanguageService',
      function (localStorageService, $rootScope, $scope, $window, LanguageService) {
        var self = this;
        
        self.linguas = [];

        function init() {
          self.linguas = LanguageService.RetornaLinguagensDisponiveis();
          var linguaSelecionada = LanguageService.InicializaLinguagens();
          self.linguaSelecionada = linguaSelecionada;
        };

        init();
      }
    ]);

})();