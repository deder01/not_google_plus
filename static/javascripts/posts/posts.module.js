(function () {
    'use strict';

    angular
        .module('thinkster.posts', [
                'thinkster.posts.controllers',
                'thinkster.posts.directives',
                'thinkster.posts.services'
        ]);

    angular.module('thinkster.posts.controllers', []);
    angular.module('thinkster.directives', ['ngDialog']);
    angular.module('thinkster.posts.services', []);
})();
