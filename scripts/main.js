(function(window) {
    'use strict';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler=App.FormHandler;
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;
    var FormHandler= new FormHandler(FORM_SELECTOR);
    FormHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(FormHandler);
})(window);
