var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'mdTable.html'
	})

});

app.controller('tableController', function($scope, $location, $rootScope){
	$scope.submit = function(){



	}
});



