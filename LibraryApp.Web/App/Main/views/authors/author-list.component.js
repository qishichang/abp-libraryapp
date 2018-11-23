/// <reference path="author.cshtml" />
(function () {
    "use strict"
    var app = angular.module("app");
    app.component("authorList", {
        templateUrl: "/App/Main/views/authors/author.cshtml",
        controllerAs: "vm",
        controller: ['abp.services.app.author', controller],
    });

    function controller(authorService) {
        var vm = this;
        vm.users = [];

        function getAuthors() {
            authorService.listAll()
                .then(function (result) {
                    vm.users = result.data;
                });
        }

        vm.refresh = function () {
            getAuthors();
        };
        
        getAuthors();
    }
})();