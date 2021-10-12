!function() {
    "use strict";
    var patient = [{
        "id": "PT001",
        "Name": "Sanjaykumar S",
        "Age": "19",
        "Gender": "Male",
        "Address": "Mariamman st, salem",
        "Symptom": "cold",
        "Appointment_Date": "20210313T00",
        "Appointment_time": "10 AM"
    }, {
        "id": "PT081",
        "Name": "Jeya Ganesh A V",
        "Age": "20",
        "Gender": "Male",
        "Address": "ganesh st, bodi",
        "Symptom": "head ache",
        "Appointment_Date": "20210313T00",
        "Appointment_time": "11 AM"
    }, {
        "id": "PT093",
        "Name": "Siddharth S",
        "Age": "20",
        "Gender": "Male",
        "Address": "kumaran st, salem",
        "Symptom": "cold",
        "Appointment_Date": "20210313T00",
        "Appointment_time": "10 AM"
    }, ];
    angular.module("Appointment", []).controller("myController", myController);
    myController.$inject = ["$scope"];

    function myController($scope) {
        $scope.patient = patient;
    }
}();