var patientApp = angular.module("make_appointment")

patientApp.controller("patientController", function($scope, $http) {
    $scope.PatientDetail = {
        patientName = 'Sanjaykumar',
        age = 19,
        gender = 'male',
        address = 'Salem, Tamil Nadu',
        Symptom = 'head ache',
        date = new Date('11/04/2002'),
        time = '11:30 AM',
    }

    $scope.patient = angular.copy($scope.PatientDetail);

    $scope.submitStudnetForm = function() {

        var onSuccess = function(data, status, headers, config) {
            alert('patient saved successfully.');
        };

        var onError = function(data, status, headers, config) {
            alert('Error occured.');
        }

        $http.post('/patient/submitData', { patient: $scope.patient })
            .success(onSuccess)
            .error(onError);
    };

    $scope.resetForm = function() {
        $scope.patient = angular.copy($scope.PatientDetail);
    };
});