/// <reference path="author.cshtml" />
(function () {
    "use strict"
    var app = angular.module("app");
    app.component("authorList", {
        templateUrl: "/App/Main/views/authors/author.cshtml",
        controllerAs: "vm",
        controller: [controller],
    });

    function controller() {
        var vm = this;
    }
})();