(function () {
  'use strict';

  angular.module('customServiceApp', []);

  angular.module('customServiceApp')
    .controller('Secao1Ctrl', ['$scope', 'UserService', function ($scope, UserService) {

      $scope.total = UserService.pegarValorTotal();

      $scope.incrementarValorTotalEm = function(num) {
        UserService.incrementarValorTotalEm(num);
      };

      $scope.$on('ValorMudouNoServico', function(){
        $scope.total = UserService.pegarValorTotal();
      });

    }]);

  angular.module('customServiceApp')
    .controller('Secao2Ctrl', ['$scope', 'UserService', function ($scope, UserService) {
      $scope.total = UserService.pegarValorTotal();

      $scope.$on('ValorMudouNoServico', function(){
        $scope.total = UserService.pegarValorTotal();
      });
    }]);

  angular.module('customServiceApp')
    .factory('UserService', ['$rootScope' , function($rootScope){

      // PRIVADO
      var total = 10;

      function pegarValorTotal() {
        return total;
      }

      function incrementarValorTotalEm(num) {
        total += num;
        console.log('Novo total incrementado em ' + num + '. Total: ' + total);
        $rootScope.$broadcast('ValorMudouNoServico');
      }

      // PUBLICO (API)
      return {
        pegarValorTotal: pegarValorTotal,
        incrementarValorTotalEm: incrementarValorTotalEm
      };
    }]);

}());