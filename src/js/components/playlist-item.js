(function(angular){
    var YTApp = angular.module('app');

    YTApp.directive('playlistItem',[function(){
        return {
            template:
                '<div class="playlist-item clearfix">' +
                    '<a ui-sref="media({ itemId: item.id })" class="title">{{item.snippet.title}}</a>'+
                    '<span class="date">Published on {{item.snippet.publishedAt | date}}</span>'+
                    '<div class="el description" last-line-ellipsis content="item.snippet.description"></div>'+
                    '<a  ui-sref="media({ itemId: item.id })" >' +
                        '<div class="thumbnail" style="background-image: url({{getThumbnail()}})"></div>' +
                    '</a>' +
                '</div>',
            scope:{
              'item':'=playlistItem'
            },
            controller:['$scope',function($scope){
                $scope.getThumbnail = function(){
                    var dist = 999999; //max size
                    var foundKey = null;
                    var size = $scope.getImageWidth();

                    if (size && $scope.item){
                        angular.forEach($scope.item.snippet.thumbnails, function(thumb, key){
                            var d = Math.abs(thumb.width - size.w);
                            if (d<dist){
                                dist = d;
                                foundKey = key;
                            }
                        })
                    }
                    if(foundKey){
                        return $scope.item.snippet.thumbnails[foundKey].url
                    } else if (size){
                        return 'http://placehold.it/' + size.w + 'x'+ size.h
                    } else {
                        return 'http://placehold.it/50x50'
                    }
                };
                $scope.getImageWidth = angular.noop;
            }],
            link: function($scope,$el){
                var thumbnailEl = $el[0].querySelectorAll('.thumbnail')[0]
                $scope.getImageWidth = function(){
                    return {
                        w:thumbnailEl.offsetWidth,
                        h:thumbnailEl.offsetHeight
                    };
                }
            }
        }
    }]);

})(angular);