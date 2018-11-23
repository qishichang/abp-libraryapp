/// <reference path="author.cshtml" />
(function () {
    "use strict"
    var app = angular.module("app");
    app.component("categoryList", {
        templateUrl: "/App/Main/views/category/category.cshtml",
        controllerAs: "vm",
        controller: [controller],
    });

    function controller() {
        var vm = this;
    }
})();