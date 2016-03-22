(function(angular){
    var SOURCE = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw';

    var YTApp = angular.module('app');

    YTApp.factory('itemsStorage',['$http','$q',function($http,$q){

    var listPromise = $http.get(SOURCE).then(adaptList);

    return {
        getItem: function(id){
            return $q(function(resolve,reject){
                listPromise.then(function(list){
                    var item = list.find(function(item){ return item.id == id });
                    if(item){ resolve(item) }
                    else { reject('not found item '+ id); }
                },function(){
                    reject('not found item '+ id);
                })
            })

        },
        list:listPromise
    };

    function adaptList(response){
        var data = response.data;
        if (data.items && data.items.length>0){
            return data.items.map(adaptItem);
        }
    }

    function adaptItem(raw){
        raw.snippet.publishedAt = new Date(Date.parse(raw.snippet.publishedAt));
        return raw;
    }
}])

})(angular);