(function () {

	var app = angular.module("customServiceApp", []);

	app.controller('Secao1Ctrl', ['$scope', '$rootScope', function($scope,$root){
		
		$scope.total = 0;

		$scope.incrementarValorTotalEm = function() {

			$scope.total = $scope.total + 1;

			$root.$broadcast("EnvioDeDados", {
				tot:$scope.total
			});
		}

		$scope.$on("EnvioDeDados",function(event, data) {
			console.log("Secao1Ctrl recebeu", data);
			$scope.total = data.tot;
		});

	}]);

	app.controller('Secao2Ctrl', ['$scope', function($scope){		

		$scope.total = 0;

		$scope.$on("EnvioDeDados",function(event, data) {
			console.log("Secao2Ctrl recebeu", data);
			$scope.total = data.tot;
		});

	}]);

})();