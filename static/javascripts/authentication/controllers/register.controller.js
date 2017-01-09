/**
 * Register controller
 * @namespace thinkster.authentication.controllers
 */
(function () {
    'use stric';

    angular
        .module('thinkster.authentication.controllers')
        .controller('RegisterController, RegisterController);

    RegisterController.$inject = ['$location', '$scope', 'Authentication'];

    /**
     * @namespace RegisterController
     */
    function RegisterController($location, $scope, Authentication) {
        var vm = this;

        vm.register = register;

        /**
         * @name register
         * @desc register a new user
         * @memberOf thinkster.authentication.controllers.RegisterController
         */
        function register() {
            Authentication.register(vm.email, vm.password, vm.username);
        }
    }
})();
