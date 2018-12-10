var app = angular.module('angularjs-mvc-example', ['ngRoute', 'oc.lazyLoad']);

app.config(function ($routeProvider, $ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        debug: false,
        events: true,
    });

    angular.forEach(modules, function (value, index) {
        var mode;
        var files = [];
        if (typeof value === 'object') {
            mode = value.c;

            angular.forEach(value.f, function (file) {
                files.push(file);
            });
        }
        else
            mode = value;

        files.push('controllers/' + mode + 'Controller.js');
        var path = '/' + mode;
        if (index === 0)
            path = '/';
        $routeProvider
            .when(path, {
                templateUrl: 'views/' + mode + '.html',
                controller: mode + 'Controller',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'angularjs-mvc-example',
                            files: files
                        });
                    }
                }
            })
            .otherwise({
                template: '<strong>No Content available</strong>'
            });
    });
});