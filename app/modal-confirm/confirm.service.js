(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('confirmService', ['$uibModal', 'appSettings', function ($uibModal, appSettings) {

            function openModal(title, msg){

                var modalInstance = $uibModal.open({
                    animation: true,
                    backdrop: 'static',
                    templateUrl: appSettings.appUrl + '/app/modal-confirm/modal-confirm.html',
                    controller: 'ModalConfirmController',
                    controllerAs: 'self',
                    resolve: {
                        msg: function () { return msg; },
                        title: function () { return title; }
                    }
                });
    
                return modalInstance.result.then(function (resp) {
                    return resp;
                });
            }

            return {
                open: openModal
            };

        }]);

})();