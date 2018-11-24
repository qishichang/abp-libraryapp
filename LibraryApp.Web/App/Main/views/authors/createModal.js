(function () {
    angular.module('app').controller('app.views.authors.createModal', [
        '$scope', '$uibModalInstance', 'abp.services.app.author',
        function ($scope, $uibModalInstance, authorService) {
            var vm = this;

            vm.author = {
                displayName: '',
                birthDate: '',
            };

            vm.save = function () {
                abp.ui.setBusy();
                authorService.create(vm.author)
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