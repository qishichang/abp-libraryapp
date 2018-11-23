/// <reference path="author.cshtml" />
(function () {
    "use strict"
    var app = angular.module("app");
    app.component("bookList", {
        templateUrl: "/App/Main/views/books/book.cshtml",
        controllerAs: "vm",
        controller: ['abp.services.app.book', controller],
    });

    function controller(bookService) {
        var vm = this;
        vm.books = [];

        function getBooks() {
            bookService.listAll()
                .then(function (result) {
                    vm.books = result.data;
                });
        }

        vm.refresh = function () {
            getBooks();
        }

        getBooks();
    }
})();