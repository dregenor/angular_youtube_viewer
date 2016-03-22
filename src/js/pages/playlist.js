(function(angular){
    var YTApp = angular.module('app');

    YTApp.directive('playlist',[function(){
        return {
            template:
                '<div class="playlist" ng-class="{loading:state.loading}">'+
                    '<h1>My YouTube playlist</h1>'+
                    '<div class="alert alert-danger" role="alert" ng-if="state.error">' +
                        '<span class="glyphicon glyphicon-exclamation-sign"></span>'+
                        '<span class="sr-only">Error:</span> {{state.errorMessage}}' +
                    '</div>'+
                    '<div ng-repeat="item in playlist" playlist-item="item"></div>'+
                '</div>',
            scope:{},
            controller:['$scope','itemsStorage',function($scope,itemsStorage){
                $scope.playlist = [];
                $scope.state = {
                    loading: false,
                    error: false,
                    errorMessage:null
                };

                loadList();

                function loadList(){
                    $scope.state.loading = true;

                    itemsStorage.list
                        .then(function(playlist){ $scope.playlist = playlist },showError)
                        ['finally'](function(){
                            $scope.state.loading = false;
                        })
                }

                function showError(err){
                    $scope.state.error = true;
                    $scope.state.errorMessage = JSON.stringify(err);
                }
            }]

        }
    }]);

})(angular);