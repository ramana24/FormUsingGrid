sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel,Fragment) {
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

			onOpenDialog : function () {

				var that=this;
				var oView = this.getView();
	
				// create dialog lazily
				if (!this.pDialog) {
					this.pDialog = Fragment.load({
						id: oView.getId(),
						name: "ux.formexercise.view.Form"
					}).then(function (oDialog) {
						// connect dialog to the root view of this component (models, lifecycle)
						oView.addDependent(oDialog);
						return oDialog;
					});
				} 
				this.pDialog.then(function(oDialog) {
					oDialog.open();
				});
			},
			onClose:function(){
				var oDialog = this.getView().byId("helloDialog");
				oDialog.close();
			},

			onOpenDialog2 : function () {

				var that=this;
				var oView = this.getView();
	
				// create dialog lazily
				if (!this.pDialog) {
					this.pDialog = Fragment.load({
						id: oView.getId(),
						name: "ux.formexercise.view.Form1"
					}).then(function (oDialog) {
						// connect dialog to the root view of this component (models, lifecycle)
						oView.addDependent(oDialog);
						return oDialog;
					});
				} 
				this.pDialog.then(function(oDialog) {
					oDialog.open();
				});
            },
            
            onSave:function(oEvent){

                	var oDraftIndi = this.byId("draftIndi");
         //   oDraftIndi.showDraftSaving();
                oDraftIndi.showDraftSaved();
             //   	oDraftIndi.clearDraftState();

        var     oName= this.getView().byId("name").getValue();
           var     ostreet= this.getView().byId("street").getValue();

           var oUser= {
               Name: oName,
               Street : ostreet

           };

sap.m.MessageToast.show(oName);

var oModel = new ODataModel("/CreateUser");

oModel.createEntry("/CreateUser",oUser);

oModel.read("/CreateUser('"+oName+"')");
oVeiw.setModel(oModel);
//alert(oName);


            }

		});
	});
