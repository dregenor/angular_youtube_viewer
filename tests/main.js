describe('module tests', function() {
    var app;
    beforeEach(function(){
        app = angular.module('app');
    });

    afterEach(function(){
        app = null;
    });

    it('Module must be created',function(){
        expect(app).not.toBeUndefined();
    })
});
