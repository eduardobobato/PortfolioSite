(function () {
  'use strict';

  angular
    .module('myApp')
    .controller('ToolbarController', [
      'localStorageService', '$rootScope', '$scope', '$window', 'LanguageService',
      function (localStorageService, $rootScope, $scope, $window, LanguageService) {
        var self = this;
        const nomeTela = 'toolbar';
        self.linguas = [];

        self.mudaLingua = function(linguaObj) {
          self.linguaSelecionada = LanguageService.Mudalingua(linguaObj);
          $rootScope.$emit('MudaIdioma', self.linguaSelecionada);
          mudaIdioma();
        };

        function mudaIdioma(idioma) {
					var textos = LanguageService.RetornaTextos('home');
					self.textos = textos;
        };

        function init() {
          self.linguas = LanguageService.RetornaLinguagensDisponiveis();
          var linguaSelecionada = LanguageService.InicializaLinguagens();
          self.linguaSelecionada = linguaSelecionada;
          mudaIdioma();
        };

        init();
      }
    ]);

})();