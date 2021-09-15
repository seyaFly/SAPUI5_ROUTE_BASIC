sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function(
    Controller,
    History
) {
    "use strict";

    return Controller.extend("onem.seya.routenavigation.controller.nav.ProductQueryDetail", {

        onInit: function() {
            this.getOwnerComponent().getRouter().getRoute("productDetailQuery").attachMatched(this._productDetailQueryMatched, this);

        },

        navBack: function(oEvent) {
            var sPreviousHash = History.getInstance().getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.back();
            } else {
                this.getOwnerComponent().getRouter().navTo("Main", {}, true);
            }
        },

        _productDetailQueryMatched: function(oEvent) {
            var oArgs, oView, oQuery;

            oArgs = oEvent.getParameter("arguments");
            oQuery = oArgs["?query"];

            oView = this.getView();
            var oText = oView.byId("idProductQueryText");
            oText.setText(oArgs.productId);

            var oText = oView.byId("idQuery");
            oText.setText(oQuery.query);


        }
    });
});