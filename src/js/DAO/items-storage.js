(function(angular){
    var SOURCE = 'https://www.googleapis.com/youtube/v3/playlistItems';
        //'part=snippet,contentDetails,status&' +
        //'maxResults=10&' +
        //'playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&' +
        //'key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw';

    var YTApp = angular.module('app');

    YTApp.factory('itemsStorage',['$http','$q',function($http,$q){

    var getlist = function(options){
        var options  = angular.extend(options,{
            part:'snippet,contentDetails,status',
            maxResults:'10',
            key:'AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw'
        });

        return $http.get(SOURCE,{params:options}).then(adaptList)
    };

    return {
        getItem: function(id){
            return $q(function(resolve,reject){
                getlist({id:id}).then(function(list){
                    if(list.items.length>0){ resolve(list.items[0]) }
                    else { reject('not found item '+ id) }
                },function(){
                    reject('not found item '+ id);
                })
            })

        },
        list:function(page){
            return getlist({
                playlistId:'PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ',
                pageToken: page
            })
        }
    };

    function adaptList(response){
        var data = response.data;
        if (data.items && data.items.length>0){
            data.items = data.items.map(adaptItem);
        }
        return data;
    }

    function adaptItem(raw){
        raw.snippet.publishedAt = new Date(Date.parse(raw.snippet.publishedAt));
        return raw;
    }
}])

})(angular);