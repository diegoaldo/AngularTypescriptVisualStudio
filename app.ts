module Application {

    class Flower
    {
       
        Id: number;
        Name: string;
        Description: string;
        ImagePath: string;
        FlowerColor: string;
    }

    class Apiservice {

        http: ng.IHttpService;

        constructor(http: ng.IHttpService) { this.http = http; }


        getFlowers(): ng.IPromise<any> {
            var config: any = {};
            //this.http.defaults.headers.common['Authorization'] = 'Basic ZGllZ29tYXJ5OkF0cmVpdXNANjI=';
            //var promise = this.http.get('https://expressclusterq-diegomary-5.c9.io/majorarcanatarots', { cache: false }).error(error => {
            var promise = this.http.get('http://dmm888enhanced.apphb.com/api/apicode/getflowers', { cache: false }).error(error => {
                alert(error);
            });   
            return promise;
        }
    }

    class MyController {


        data: any;
        flowers: Array<Flower>;
        http: ng.IHttpService;
        Ssvr: Apiservice;

        constructor($http: ng.IHttpService, ssvr: Apiservice) {
            this.Ssvr = ssvr;
            this.http = $http;
            this.data = [{ name: 'Diego', email: 'diego@dmm888.com' }, { name: 'Maria', email: 'maria@dmm888.com' }, { name: 'Pluto', email: 'pluto@dmm888.com' }, { name: 'Pippo', email: 'pippo@dmm888.com' }];
        }


        private GetFlowers() {
            var self = this;

            this.Ssvr.getFlowers().then((response) =>
            {
                // To be sure to get the right data
                if (Array.isArray(response.data))
                    self.flowers = response.data;

                var t = 0;
            }
            );
       
        }

    }

    var appModule = angular.module("myApp", []);

    appModule.factory('Apiservice', ["$http", ($http) => new Apiservice($http)]);

    appModule.controller("MyController", ["$http", "Apiservice", ($http, Apiservice) => new MyController($http, Apiservice)]);

}

