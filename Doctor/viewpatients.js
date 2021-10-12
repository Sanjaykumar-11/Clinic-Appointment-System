!function(){
    "use strict";
    var patient_records=[
    {"SNo":"1","Date":"12/09/2021","PatientName":"JeyaGanesh","Prescription":"Crocin","UpdateRecord":"Fever","CancelRecord":"X"},
    {"SNo":"2","Date":"12/09/2021","PatientName":"Sanjaykumar","Prescription":"Paracetomal","UpdateRecord":"Fever","CancelRecord":"X"},
    {"SNo":"3","Date":"13/09/2021","PatientName":"Siddharth","Prescription":"Digene","UpdateRecord":"Stomachpain","CancelRecord":"X"},
    {"SNo":"4","Date":"14/09/2021","PatientName":"Sanjaykumar","Prescription":"Aspirin","UpdateRecord":"Fever","CancelRecord":"X"},
    {"SNo":"5","Date":"15/09/2021","PatientName":"Siddharth","Prescription":"Benzonate","UpdateRecord":"Cold","CancelRecord":"X"},
    ];
    angular.module('myApp',[])
    .controller('firstController',firstController)
    firstController.$inject=['$scope'];
    function firstController($scope){
    $scope.patient_records=patient_records;
    }
    }();