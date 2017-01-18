/**
 * Login controller
 * @namespace thinkster.authentication.controllers
 */
(function () {
    'use stric';

    angular
        .module('thinkster.authentication.controllers')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$scope', 'Authentication'];

    /**
     * @namespace LoginController
     */
    function LoginController($location, $scope, Authentication) {
        var vm = this;

        vm.login= login;

        activate();

        function activate() {
            // If the user is authenticated they should not be here
            if (Authentication.isAuthenticated()) {
                $location.url('/');
            }
        }

        /**
         * @name login
         * @desc login and authenticate a user
         * @memberOf thinkster.authentication.controllers.LoginController
         */
        function login() {
            Authentication.login(vm.email, vm.password);
        }
    }
})();
