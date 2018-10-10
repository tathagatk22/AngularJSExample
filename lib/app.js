var app = angular.module('app2', [])
app.controller('HelloWorldCtrl', function ($scope) {
    $scope.message = "Helldsdsdsdso World"
});

var app1 = angular.module('app1', [])
app1.controller('Ctrl', function ($scope) {
    $scope.fullname = function (firstName, lastname) {
        return firstName + lastname;
    }
    $scope.name = "Tathagat Khanorkar"
});

var app3 = angular.module('app3', [])
app3.controller('Controller1', function ($scope) {
    $scope.topics = {
        TopicNames: [
            { name: "Tathgat" },
            { name: "Ajay" },
            { name: "Khanorkar" }
        ]
    }
});

var app4 = angular.module('app4', [])
app4.controller('Controller2', function ($scope) {
    $scope.name = "Tathagat"
    $scope.Topic = {
        controller: true,
        model: false
    };
});

var app7 = angular.module('app7', [])
app7.controller('Controller7', function ($scope) {
    $scope.name = "Engineering";
    $scope.Topics = {
        option1: "maths",
        option2: "physics"
    };
    $scope.fullName = function (firstName, lastname) {
        return firstName + "  " + lastname;
    };
    $scope.names = ["Tathagat", "Ajay", "Khanorkar"];
});

var app8 = angular.module('app8', [])
app8.controller('Controller8', function ($scope) {
    $scope.names = [
        { name: 'Tathagat', country: 'India' },
        { name: 'Ta2thagat', country: 'Indi2a' },
        { name: 'Tathag2at', country: 'In1dia' },
        { name: 'Tatha2gat', country: 'Ind1ia' }
    ];
    $scope.orderby = function (x) {
        $scope.myOrder = x;
    }
});

var app9 = angular.module('app9', [])
app9.controller('Controller9', function ($scope, $location, $timeout, $interval) {
    $scope.myUrl = $location.path();
    $scope.names = ["Tathagat", "Ajay", "Khanorkar"];
    $scope.urlProtocol = $location.protocol();
    $scope.myHeader = "Hello"
    $timeout(function () {
        $scope.myHeader = "How are you today?";
    }, 2000);

    $scope.myTime = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.myTime = new Date().toLocaleTimeString();
    }, 1000)
    $scope.count = 0;
    $scope.myFunc = function () {
        $scope.count++;
    }
});
var app10 = angular.module('app10', [])
app10.controller('Controller10', function () {
    var Value = {
        sourceUrl: "../image/image1.jpg"
    };
    $scope.Value = Value;
});

var app11 = angular.module('myApp11', []);
app11.controller('Controller11', function ($scope, $http) {
    $http.get("https://reqres.in/api/users?page=2")
        .then(function (response) {
            $scope.names = response.data;
        });
});


var app12 = angular.module('app12', []);
app12.controller('Controller12', function ($scope, $http) {
    $scope.email = "sydney@fife"
    $scope.password = "pistol"
    $scope.message = ""
    $scope.add = "sasas"
    $scope.postdata1 = function (name1, job) {
        var data = {
            name: name1,
            job: job
        }
        $http.post('https://reqres.in/api/users', JSON.stringify(data)).then(function (response) {
            $scope.name1 = response.name
            $scope.job = response.job
            $scope.id = response.id
            $scope.createdAt = response.createdAt
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
            $scope.message = "Successfull"
        }, function (response) {
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
            $scope.message = "UnSuccessfull"
        })
    }
    $scope.postdata = function (email, password) {
        var data = {
            email: email,
            password: password
        };
        $http.post('https://reqres.in/api/register', JSON.stringify(data)).then(function (response) {
            $scope.token = response.data.token;
            if (response.data) {
                $scope.statusval = response.status;
                $scope.statustext = response.statusText;
                $scope.headers = response.headers();
                $scope.message = "Successfull"
            }
        }, function (response) {
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
            $scope.message = "Unsuccessfull"
        })
    };
});

var app13 = angular.module("app13", [])
app13.controller("Controller13", function ($scope, $http) {
    $scope.jsonp = $http.get('https://reqres.in/api/users?page=2').then(function (response) {
        $scope.listData = response.data.data
    })
    $scope.jsonp1 = $http.get('https://jsonplaceholder.typicode.com/photos').then(function (response) {
        $scope.listData1 = response.data
    })
    $scope.names = ["Tathagat", "Ajay", "Khanorkar"];
})

var app14 = angular.module("app14", [])
app14.controller("Controller14", function ($scope, $http) {
    $scope.dara = "sdasddasda"
   $scope.jsonp = $http.get('http://localhost:8000/post').then(function (response) {
        $scope.listData = response.data.id
    })
    $scope.jsonp = $http.get('https://reqres.in/api/users?page=2').then(function (response) {
        $scope.listData1 = response.data.data
    })
});
    // $http.jsonp('http://127.0.0.1:800/a',  {jsonpCallbackParam: 'callback'}).then(function(data) {
    //         $scope.data1 = data.id
    //         console.log(data.found);
    //     });

    // $scope.jsonp1 = $http.get('http://127.0.0.1:800/a').then(function (response) {
    //     $scope.listData1 = response.data
    // })
// });