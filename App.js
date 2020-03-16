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
    .when("/mittfiske", { 
        templateUrl: "views/mittfiske.html", // Till vilken sida man kommer 
        controller: "defaultController"  // Anropar controllen som länkar samman bild 
    })
    .when("/utrustning", { 
        templateUrl: "views/utrustning.html", // Till vilken sida man kommer 
        controller: "defaultController"  // Anropar controllen som länkar samman bild 
    })
    .when("/ommig", { 
        templateUrl: "views/ommig.html", // Till vilken sida man kommer 
        controller: "defaultController"  // Anropar controllen som länkar samman bild 
    })
    .when("/fiskeomraden", { 
        templateUrl: "views/fiskeomraden.html", // Till vilken sida man kommer 
        controller: "defaultController"  // Anropar controllen som länkar samman bild 
    })
    .when("/priser", { 
        templateUrl: "views/priser.html", // Till vilken sida man kommer 
        controller: "defaultController"  // Anropar controllen som länkar samman bild 
    })

})

app.config(function($routeProvider) {       // Routen länkar mellan olika sidor genom att använda en controller
    $routeProvider
    .when("/guider", { 
        templateUrl: "views/guider.html", // Till vilken sida man kommer 
        controller: "defaultController-1"  // Anropar controllen som länkar samman bild 
    })
    



})

app.controller("defaultController", function($scope) { // Scope hämtar en del, och rootscope hämtar allt. Scopet är testamonials. 
    $scope.startsida = [
        { title: "EKENS SPORTFISKE", text: "Jag tar dig precis ditt du vill mannen.", image: "Header-image.jpg" },
        
        
    ]
    $scope.fiskemetoder = [
        { title: "Fiskemetoder", text: "Jag har så många fiskemetoder så du har ingen aning.", image: "01-man-fishing.png"  },
        
        
    ]
    $scope.mittfiske = [
        { title: "Mitt Fiske", text: "Jag har så många MITTFISKE så du har ingen aning.", image: "01-man-fishing.png" },
        
        
    ]
    $scope.utrustning = [
        { title: "Utrustning", text: "Jag har så mycket utrustning så du anar inte.", image: "01-man-fishing.png" },
        
        
    ]
    $scope.ommig = [
        { title: "Om mig", text: "Här får du veta allt om mig", image: "01-man-fishing.png" },
        
        
    ]
    $scope.fiskeomraden = [
        { title: "Fiskeområden", text: "Jag kan varenda område bara så du vet", image: "01-man-fishing.png" },
        
        
    ]
    $scope.priser = [
        { title: "Priser", text: "Jag har inga priser bara så du vet.", image: "01-man-fishing.png" },
        
        
    ]
   
    
})

app.controller("defaultController-1", function($scope) { // Scope hämtar en del, och rootscope hämtar allt. Scopet är testamonials. 
    $scope.guider = [
        { title: "Fredrik Åkare", text: "Experten inom Spinnfiske", button: "Läs mer"  },
        { title: "Klasse Lejonskog", text: "Experten inom Trolling", button: "Läs mer"  },
        { title: "Kalle Iskung", text: "Experten inom Isfiske", button: "Läs mer"  },
        
        
    ]
   
    
    
})

app.directive("appheader", function() { // Partial view är en liten del av sidan. View är hela sidan. App header ska skrivas i index body
    return { // vad som ska skickas tillbaka
        template: '<nav class="navbar navbar-expand-lg navbar-light bg-gold"> <a class="navbar-brand" href="#/!startsida"> <img class="loggotype" src="/Image/f473a012-2d2a-4769-a900-fe5ebed07e33_200x200.png" alt=""></b></a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup"> <div class="navbar-nav"> <a class="nav-item nav-link t-color-navbar mr-3" href="#!fiskemetoder">Fiskemetoder</a> <a class="nav-item nav-link t-color-navbar mr-3" href="#!mittfiske">Mitt Fiske</a> <a class="nav-item nav-link t-color-navbar mr-3" href="#!utrustning">Utrustning</a> <a class="nav-item nav-link t-color-navbar mr-3" href="#!ommig">Om mig</a> <a class="nav-item nav-link t-color-navbar mr-3" href="#!fiskeomraden">Fiskeområden</a> <a class="nav-item nav-link t-color-navbar mr-3" href="#!priser">Priser</a> <a class="nav-item nav-link t-color-navbar mr-3" href="#!guider">Guider</a> </div></div></nav>'
    }
})
app.directive("appfooter", function() { // Partial view är en liten del av sidan. View är hela sidan. App header ska skrivas i index body
    return { // vad som ska skickas tillbaka
        template: '<hr class="m-0 style-hr"> <div class="container-fluid text-center bg-gold p-0"> <img class="loggotype-small mr-5" src="/image/f473a012-2d2a-4769-a900-fe5ebed07e33_200x200.png" alt=""> <footer class="d-flex justify-content-center bg-gold color-text"> <div class="mr-5 mb-4"> <p><i class="fas fa-phone-square size-icon color-icons "></i></p><p class="text-footer m-0">Telefonnummer</p><small class="text-footer footer-text-gray">+46 74989898</small> </div><div class="mr-5"> <p><i class="fas fa-envelope size-icon color-icons"></i></p><p class="text-footer m-0">Email</p><small class="text-footer footer-text-gray">Ekensfiskebokning@gmail.com</small> </div><div class="mr-5"> <p><i class="fas fa-location-arrow color-icons size-icon"></i></p><p class="text-footer m-0">Var finns vi</p><small class="text-footer footer-text-gray">Repslagargatan 2b</small> </div></footer> </div>'
    }
})