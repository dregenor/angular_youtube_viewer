(function(angular){
    var YTApp = angular.module('app');

    YTApp.directive('itemFull',[function(){
        return {
            template:
            '<div class="item-full">' +
                '<a ui-sref="playlist" class="back"><  Back to list of videos</a>'+
                '<span class="title">{{item.snippet.title}}</span>'+
                '<span class="date">Published on {{item.snippet.publishedAt | date}}</span>'+
                '<div class="clearfix">' +
                    '<div class="video-player">' +
                        '<iframe ng-src="{{trustedUrl}}" frameborder="0" allowfullscreen></iframe>'+
                    '</div>'+
                    '<div class="description">{{item.snippet.description}}</div>'+
                '</div>'+
            '</div>',
            scope:{},
            controller:['$scope','$stateParams','itemsStorage',function($scope,$stateParams,itemsStorage){
                $scope.item = null;
                $scope.trustedUrl = null;
                $scope.$watch('item.contentDetails.videoId',function(id){
                    if(id){
                        $scope.trustedUrl = 'https://www.youtube.com/embed/'+ id
                    } else {
                        $scope.trustedUrl = null;
                    }
                });

                itemsStorage.getItem($stateParams.itemId).then(function(item){
                    $scope.item = item
                })
            }]
        }
    }]);

})(angular);