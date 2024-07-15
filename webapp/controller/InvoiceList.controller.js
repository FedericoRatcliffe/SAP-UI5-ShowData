sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","../model/formatter","sap/ui/model/Filter","sap/ui/model/FilterOperator"], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
	
    "use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        

        /*
            Para cargar las funciones de nuestro formatter, tenemos que añadirlo a InvoiceList.controller.js

            El controlador simplemente almacena las funciones de formateo cargadas en la propiedad local formatter 
            para poder acceder a ellas en la vista.

            ESTE FORMATTER TAMPOCO TRAE LOS DATOS oData
        */
        formatter: formatter,
        

        
        /* 
            Crea un modelo JSON para el precio
        */
		// onInit : function () {
		// 	let oViewModel = new JSONModel({currency: "EUR"});
		// 	this.getView().setModel(oViewModel, "view");
		// },
        



	});
});