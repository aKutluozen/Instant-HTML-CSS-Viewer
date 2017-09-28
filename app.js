var app = angular.module("instantHTML", ["ngSanitize"]);

app.controller("mainController", function($scope, $filter){
    $scope.code = "<h1>Instant Results!</h1>\n<hr>\n<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/2000px-AngularJS_logo.svg.png' alt='angularLogo'>\n<p>Instant HTML/CSS Viewer is a simple web application that utilizes two way data-binding and filtering capabilities of AngularJS giving the user an instant result of whatever HTML and CSS typed in above panels.</p>";
    $scope.styling = "h1 { letter-spacing: 15px; font-weight: bold; text-align: center; font-size: 50px; text-transform: uppercase; text-shadow: 4px 4px 32px #888; padding: 10px; }\n\np { float: left; width: 60%; font-size: 16px; padding: 20px; box-shadow: 4px 4px 16px #aab; background: #f1f1f1; margin-top: 20px; }\n\nimg { width: 40%; float: left; padding: 20px; }";
});

app.filter('noCarriage', function() {
    return function(input) {
        return input.replace(/\n/g, " ");
    }
});