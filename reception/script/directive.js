angular.module("DirectiveApp", [])
.controller("MoneyController", MoneyController)
.directive("confirm", function () {
    return {
      template:
        "<h2>{{name}} is paid</h2>"
    };
});
   
var name = "";
var amount = 100;

MoneyController.$inject = ['$scope'];

function MoneyController($scope)
{
    $scope.name = name;
    $scope.amount = amount;
}