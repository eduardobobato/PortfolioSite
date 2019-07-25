(function () {
	'use strict';

	angular
	.module('myApp') 
	.controller('ModalConfirmController', ['$uibModalInstance', '$sce', 'msg', 'title', 
		function ($uibModalInstance, $sce, msg, title) {

			var self = this;
			self.msg = $sce.trustAsHtml(msg);
			self.title = title;

 	   		self.confirmar = function(){
				$uibModalInstance.close('success');
 	   		};
     	 
 	   		self.voltar = function () {
 	   			$uibModalInstance.dismiss('cancel');
 	   		};
	}]);
})();
	