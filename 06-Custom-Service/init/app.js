(function () {
    'use strict';

    angular.module('customServiceApp', []);

    angular.module('customServiceApp')
        .controller('Secao1Ctrl', ['$scope', 'UserService',
            function ($scope, UserService) {
                $scope.pegarMensagem = function () {
                    return UserService.pegarMensagem();
                };
            }]);

    angular.module('customServiceApp')
        .controller('Secao2Ctrl', ['$scope', 'UserService',
            function ($scope, UserService) {
                $scope.pegarMensagem = function () {
                    return UserService.pegarMensagem();
                };
    }]);

    angular.module('customServiceApp')
        .controller('ServicoSetterCtrl', ['$scope', 'UserService',
            function ($scope, UserService) {
                $scope.setarMensagem = function () {
                    UserService.setarMensagem($scope.novaMensagem);
                };
    }]);

    angular.module('customServiceApp')
        .factory('UserService', function () {

            // PRIVADO
            var mensagem = 'Olá! Ass: Serviço';

            function pegarMensagem() {
                return mensagem;
            }

            function setarMensagem(valor) {
                mensagem = valor;
            }

            // PUBLICO (API)
            return {
                pegarMensagem: pegarMensagem,
                setarMensagem: setarMensagem
            };
        });

}());