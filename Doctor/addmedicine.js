!function(){
    "use strict";
    var patient_records=[
    	{ "SNo": "0", "Name":"sanjay","age":"20","medicinename":"paracetamol","medicinecount":"10"},
        { "SNo": "1", "Name": "dixon", "age": "21", "medicinename": "azithromycin","medicinecount" : "15"},
        { "SNo": "2", "Name": "ganesh", "age": "20", "medicinename": "aspirin", "medicinecount": "15"},
        { "SNo": "3", "Name": "siddharth", "age": "22", "medicinename": "benzonate", "medicinecount": "20"},
 
    ];
    
    
    angular.module('myApp',[])
    .controller('firstController',firstController)
    .factory('fac', function() {
        var factory = {};
        factory.Remove = function(index) {
            patient_records.splice(index,1)
            
        };
        factory.Add = function(name1, age, medicinename, medicinecount) {
            patient_records.push({'Name':name1,'Age':age,'Medicinename':medicinename,'Medicinecount':medicinecount})
        };
        return factory;
    });
    firstController.$inject=['$scope',fac];
    function firstController($scope,fac){
        $scope.patient_records = patient_records;
        $scope.addpatient=function(){
            $scope.result=fac.Add($scope.name1, $scope.age,$scope.medicinename,$scope.medicinecount);};
        $scope.removepatient=function(idx){
            $scope.result=fac.Remove(idx);
        };
        
    }
}();
