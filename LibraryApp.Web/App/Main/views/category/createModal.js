(function () {
    angular.module('app').controller('app.views.category.createModal', [
        '$scope', '$uibModalInstance', 'abp.services.app.category',
        function ($scope, $uibModalInstance, categoryService) {
            var vm = this;

            vm.category = {
                displayName: '',
                birthDate: '',
            };

            vm.save = function () {
                abp.ui.setBusy();
                categoryService.create(vm.category)
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