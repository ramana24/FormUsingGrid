sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("ux.formexercise.controller.Main", {
			onInit: function () {

 // set data model on view
 var oData = {
	recipient : {
	   name : "FioriUX"
	}
 };
 var oModel = new JSONModel(oData);
 this.getView().setModel(oModel);

			}
		});
	});
