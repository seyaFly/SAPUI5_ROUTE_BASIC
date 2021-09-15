sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function(
    Controller,
    History
) {
    "use strict";

    return Controller.extend("onem.seya.routenavigation.controller.nav.Product", {
        navBack: function(oEvent) {
            var sPreviousHash = History.getInstance().getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.back();
            } else {
                this.getOwnerComponent().getRouter().navTo("Main", {}, true);
            }
        }
    });
});