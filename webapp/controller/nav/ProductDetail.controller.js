sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function(
    Controller,
    History
) {
    "use strict";

    return Controller.extend("onem.seya.routenavigation.controller.nav.ProductDetail", {
        /**
         * @override
         */
        onInit: function() {
            this.getOwnerComponent().getRouter().getRoute("productDetail").attachMatched(this._productDetailMatched, this);

        },
        _productDetailMatched: function(oEvent) {
            var oArgs = oEvent.getParameter("arguments");
            var oView = this.getView();
            var oText = oView.byId("idProductText");
            oText.setText(oArgs.productId);
        },

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