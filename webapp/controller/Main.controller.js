sap.ui.define(["onem/seya/routenavigation/controller/BaseController"], function(Controller) {
    "use strict";

    return Controller.extend("onem.seya.routenavigation.controller.Main", {

        /**
         * 
         * 无相关页面时， 显示 NotFound页面
         */
        navToNotFound: function() {
            this.getOwnerComponent()
                .getRouter()
                .getTargets()
                .display("notFound");
        },

        navToProduct: function(oEvent) {
            this.getOwnerComponent()
                .getRouter()
                .navTo("product")
        },

        navToProductWithParamter: function(oEvent) {
            this.getOwnerComponent()
                .getRouter()
                .navTo("productDetail", {
                    productId: 999
                })
        },

        navToProductWithParamterAndQuery: function(oEvent) {
            this.getOwnerComponent()
                .getRouter().navTo("productDetailQuery", {
                    productId: 999,
                    "?query": {
                        query: "query1234"
                    }
                }, true /*no history*/ );
        }
    });
});