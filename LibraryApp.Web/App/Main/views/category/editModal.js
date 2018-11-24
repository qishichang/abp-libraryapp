(function () {
    angular.module('app').controller('app.views.category.editModal', [
        '$scope', '$uibModalInstance', 'abp.services.app.category', 'id',
        function ($scope, $uibModalInstance, categoryService, id) {
            var vm = this;

            vm.category = {};

            function init() {
                categoryService.getCategoryById({
                    id: id
                }).then(function (result) {
                    vm.category = result.data;
                });
            }

            init();

            vm.save = function () {
                abp.ui.setBusy();
                categoryService.update(vm.category)
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