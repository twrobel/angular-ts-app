"use strict";
var AdminController = (function () {
    /* @ngInject */
    function AdminController(logger) {
        this.logger = logger;
    }
    AdminController.prototype.activate = function () {
        var a = 1;
    };
    AdminController.$inject = ['logger'];
    return AdminController;
}());
exports.AdminController = AdminController;
