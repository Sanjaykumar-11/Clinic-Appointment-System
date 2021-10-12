angular.module("SymptomApp",[])
.controller("SymptomController",SymptomController)
.factory('SymptomFactory',SymptomFactory);

function SymptomFactory()
{
    var factory = function(maxCount)
    {
        return new SymptomServer(maxCount);
    }
    return factory;
}

function SymptomServer(maxCount)
{
    var service = this;
    var symp = ["cough"];

    service.addItem = function(s)
    {
        if((maxCount != undefined && symp.length <maxCount))
        {
            symp.push(s);
        }
        else
        {
            throw new Error('Max Count reached');
        }
        service.removeItem = function(sympIndex)
        {
            symp.splice(sympIndex, 1);
        }
        service.getItems = function()
        {
            return symp;
        }
    }
}

SymptomController.$inject = ['SymptomFactory'];

function SymptomController(SymptomFactory)
{
    var l = this;
    var symptomList = SymptomFactory(3);
    l.symp = symptomList.getItems();
    l.sym = "";
    l.addItem = function()
    {
        symptomList.addItem(l.sym);
    }
    l.removeItem = function(sympIndex)
    {
        symptomList.removeItem(sym);
    };

}

