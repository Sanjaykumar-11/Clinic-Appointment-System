!function() {
    "use strict";
    angular.module("Appointment", []).controller("myController", myController);
    myController.$inject = ["$scope","$http"];

    function myController($scope, $http) {
        $http.get('/viewappointment').then(function(data)
        {
            $scope.patient = data.data;
            console.log(patient);
        });       
    }
}();