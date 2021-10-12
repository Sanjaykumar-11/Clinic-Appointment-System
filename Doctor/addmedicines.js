angular.module('AddmedicineApp', [ ]) 
.controller('AddMedicineController', AddMedicineController) 
.controller('AddMedicineShowController', AddMedicineShowController) 
.service('AddMedicineService', AddMedicineService);

function AddMedicineService() { 
	var service = this; 
	var items = []; 
	service.addItem = function (itemName, quantity) { 
		var item = { name: itemName, quantity: quantity }; 
		items.push(item);   }; 
	service.removeItem = function (itemIndex) { 
		items.splice(itemIndex, 1);   }; 
	service.getItems = function () { return items; }; 
}
AddMedicineController.$inject = ['AddMedicineService']; 
function AddMedicineController(AddMedicineService) { 
	var itemAdder = this; 
	itemAdder.itemName = ""; 
	itemAdder.itemQuantity = ""; 
	itemAdder.addItem = function () { AddMedicineService.addItem(itemAdder.itemName,
					itemAdder.itemQuantity); 	} 
}
AddMedicineShowController.$inject = ['AddMedicineService']; 
function AddMedicineShowController(AddMedicineService) { 
var showList = this; 
showList.items = AddMedicineService.getItems(); 
showList.removeItem = function (itemIndex) { AddMedicineService.removeItem(itemIndex);    }; 
}
