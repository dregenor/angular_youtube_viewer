(function(w,angular){
    var YTApp = angular.module('app');
    YTApp.directive('lastLineEllipsis', [function () {
        return {
            scope: {
                content: '='
            },
            template: '{{content}}',
            link: function (scope, el) {
                scope.$watch('content', function () {
                    w.applyEllipsis(el[0]);
                })
            }
        }
    }]);
})(window,angular);