(function () {
    angular.module('app').controller('app.views.authors.editModal', [
        '$scope', '$uibModalInstance', 'abp.services.app.author', 'id',
        function ($scope, $uibModalInstance, authorService, id) {
            var vm = this;

            vm.author = {};

            function init() {
                authorService.getAuthorById({
                    id: id
                }).then(function (result) {
                    vm.author = result.data;
                });
            }

            init();

            vm.save = function () {
                abp.ui.setBusy();
                authorService.update(vm.author)
                    .then(function () {
                        abp.notify.info(App.localize('SavedSuccessfully'));
                        $uibModalInstance.close();
                    }).finally(function () {
                        abp.ui.clearBusy();
                    });
            };

            vm.cancel = function () {
                $uibModalInstance.dismiss();
            };
        }
    ]);
})();