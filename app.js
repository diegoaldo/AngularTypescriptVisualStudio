var Application;
(function (Application) {
    var Flower = (function () {
        function Flower() {
        }
        return Flower;
    }());
    var Apiservice = (function () {
        function Apiservice(http) {
            this.http = http;
        }
        Apiservice.prototype.getFlowers = function () {
            var config = {};
            //this.http.defaults.headers.common['Authorization'] = 'Basic ZGllZ29tYXJ5OkF0cmVpdXNANjI=';
            //var promise = this.http.get('https://expressclusterq-diegomary-5.c9.io/majorarcanatarots', { cache: false }).error(error => {
            var promise = this.http.get('http://dmm888enhanced.apphb.com/api/apicode/getflowers', { cache: false }).error(function (error) {
                alert(error);
            });
            return promise;
        };
        return Apiservice;
    }());
    var MyController = (function () {
        function MyController($http, ssvr) {
            this.Ssvr = ssvr;
            this.http = $http;
            this.data = [{ name: 'Diego', email: 'diego@dmm888.com' }, { name: 'Maria', email: 'maria@dmm888.com' }, { name: 'Pluto', email: 'pluto@dmm888.com' }, { name: 'Pippo', email: 'pippo@dmm888.com' }];
        }
        MyController.prototype.GetFlowers = function () {
            var self = this;
            this.Ssvr.getFlowers().then(function (response) {
                // To be sure to get the right data
                if (Array.isArray(response.data))
                    self.flowers = response.data;
                var t = 0;
            });
        };
        return MyController;
    }());
    var appModule = angular.module("myApp", []);
    appModule.factory('Apiservice', ["$http", function ($http) { return new Apiservice($http); }]);
    appModule.controller("MyController", ["$http", "Apiservice", function ($http, Apiservice) { return new MyController($http, Apiservice); }]);
})(Application || (Application = {}));
//# sourceMappingURL=app.js.map