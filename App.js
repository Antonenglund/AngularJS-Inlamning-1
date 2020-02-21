var app = angular.module("demoApp", ["ngRoute"])

app.config(function($routeProvider) {       // Routen länkar mellan olika sidor genom att använda en controller
    $routeProvider
    .when("/", { 
        templateUrl: "views/startsida.html", // Till vilken sida man kommer 
        controller: "defaultController"  // Anropar controllen som länkar samman bild 
    })
    .when("/fiskemetoder", { 
        templateUrl: "views/fiskemetoder.html", // Till vilken sida man kommer 
        controller: "defaultController"  // Anropar controllen som länkar samman bild 
    })




})

app.controller("defaultController", function($scope) { // Scope hämtar en del, och rootscope hämtar allt. Scopet är testamonials. 
    $scope.startsida = [
        { title: "Mitt fiske", text: "Lorem ipsum dolor sit amet.....Lorem ipsum dolor sit amet....." },
        
        
    ]
   
    
})

app.directive("appheader", function() { // Partial view är en liten del av sidan. View är hela sidan. App header ska skrivas i index body
    return { // vad som ska skickas tillbaka
        template: '<nav class="navbar navbar-expand-lg navbar-light bg-gold"> <a class="navbar-brand" href="#/!hem"> <img class="loggotype" src="/Image/f473a012-2d2a-4769-a900-fe5ebed07e33_200x200.png" alt=""></b></a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup"> <div class="navbar-nav"> <a class="nav-item nav-link t-color-navbar mr-3" href="#!fiskemetoder">Fiskemetoder</a> <a class="nav-item nav-link t-color-navbar mr-3" href="#!mittfiske">Mitt Fiske</a> <a class="nav-item nav-link t-color-navbar mr-3" href="#!utrustning">Utrustning</a> <a class="nav-item nav-link t-color-navbar mr-3" href="#!ommig">Om mig</a> <a class="nav-item nav-link t-color-navbar mr-3" href="#!fiskeomraden">Fiskeområden</a> <a class="nav-item nav-link t-color-navbar mr-3" href="#!priser">Priser</a> </div></div></nav>'
    }
})