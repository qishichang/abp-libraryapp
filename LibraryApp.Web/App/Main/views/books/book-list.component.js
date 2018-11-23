/// <reference path="author.cshtml" />
(function () {
    "use strict"
    var app = angular.module("app");
    app.component("bookList", {
        templateUrl: "/App/Main/views/books/book.cshtml",
        controllerAs: "vm",
        controller: [controller],
    });

    function controller() {
        var vm = this;
    }
})();