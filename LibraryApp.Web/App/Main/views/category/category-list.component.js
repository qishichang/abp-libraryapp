/// <reference path="Category.cshtml" />
(function () {
    "use strict"
    var app = angular.module("app");
    app.component("categoryList", {
        templateUrl: "/App/Main/views/category/category.cshtml",
        controllerAs: "vm",
        controller: ['$uibModal',"abp.services.app.category", controller],
    });

    function controller($uibModal, categoryService) {
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

        vm.openCategoryCreationModal = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/App/Main/views/category/createModal.cshtml',
                controller: 'app.views.category.createModal as vm',
                backdrop: 'static'
            });

            modalInstance.rendered.then(function () {
                $.AdminBSB.input.activate();
            });

            modalInstance.result.then(function () {
                getCategories();
            });
        };

        vm.openCategoryEditModal = function (category) {
            var modalInstance = $uibModal.open({
                templateUrl: '/App/Main/views/category/editModal.cshtml',
                controller: 'app.views.category.editModal as vm',
                backdrop: 'static',
                resolve: {
                    id: function () {
                        return category.id;
                    }
                }
            });

            modalInstance.rendered.then(function () {
                $.AdminBSB.input.activate();
            });

            modalInstance.result.then(function () {
                getCategories();
            });
        };

        vm.delete = function (category) {
            abp.message.confirm(
                "Delete category '" + category.displayName + "'?",
                function (result) {
                    if (result) {
                        categoryService.delete({ id: category.id })
                            .then(function () {
                                abp.notify.info("Deleted category: " + category.displayName);
                                getCategories();
                            });
                    }
                });
        }

        getCategories();
    }
})();