/// <reference path="author.cshtml" />
(function () {
    "use strict"
    var app = angular.module("app");
    app.component("authorList", {
        templateUrl: "/App/Main/views/authors/author.cshtml",
        controllerAs: "vm",
        controller: ['$uibModal', 'abp.services.app.author', controller],
    });

    function controller($uibModal, authorService) {
        var vm = this;
        vm.users = [];

        function getAuthors() {
            authorService.listAll()
                .then(function (result) {
                    vm.users = result.data;
                });
        };

        vm.refresh = function () {
            getAuthors();
        };

        vm.openAuthorCreationModal = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/App/Main/views/authors/createModal.cshtml',
                controller: 'app.views.authors.createModal as vm',
                backdrop: 'static'
            });

            modalInstance.rendered.then(function () {
                $.AdminBSB.input.activate();
            });

            modalInstance.result.then(function () {
                getAuthors();
            });
        };

        vm.openAuthorEditModal = function (author) {
            var modalInstance = $uibModal.open({
                templateUrl: '/App/Main/views/authors/editModal.cshtml',
                controller: 'app.views.authors.editModal as vm',
                backdrop: 'static',
                resolve: {
                    id: function () {
                        return author.id;
                    }
                }
            });

            modalInstance.rendered.then(function () {
                $.AdminBSB.input.activate();
            });

            modalInstance.result.then(function () {
                getAuthors();
            });
        };

        vm.delete = function (author) {
            abp.message.confirm(
                "Delete author '" + author.displayName + "'?",
                function (result) {
                    if (result) {
                        authorService.delete({ id: author.id })
                            .then(function () {
                                abp.notify.info("Deleted auhtor: " + author.displayName);
                                getAuthors();
                            });
                    }
                });
        }

        getAuthors();
    }
})();