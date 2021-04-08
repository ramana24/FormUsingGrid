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
 var MockData = {
	recipient : {
	   name : "FioriUX",
	   lastname:"UI5",
	   contact:"+91-999999999",
	   email:"fioriux@xyx.com",
	   address:"New York",
	   city:"Banglore"
	}
 };

 // empty model - container
 var oModel = new JSONModel(MockData); // it has content
 this.getView().setModel(oModel);


 // CRM server data
 var sUrl="";
 var oModel = new JSONModel(sUrl); // it has content
 //this.getView().byId("ProfileID2").setModel(oModel);


  // HR server data
  var sHRUrl="";
  var oModel = new JSONModel(sHRUrl); // it has content
  //this.getView().byId("ProfileID").setModel(oModel);

			},

		});
	});
