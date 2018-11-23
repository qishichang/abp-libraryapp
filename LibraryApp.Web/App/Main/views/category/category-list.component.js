/// <reference path="author.cshtml" />
(function () {
    "use strict"
    var app = angular.module("app");
    app.component("categoryList", {
        templateUrl: "/App/Main/views/category/category.cshtml",
        controllerAs: "vm",
        controller: ["abp.services.app.category", controller],
    });

    function controller(categoryService) {
        var vm = this;
        vm.categories = [];

        function getCategories() {
            categoryService.listAll()
                .then(function (result) {
                    vm.categories = result.data;
                });
        }

        vm.refresh = function () {
            getCategories();
        }

        getCategories();
    }
})();