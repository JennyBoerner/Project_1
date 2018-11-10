var restaurants = [];

$("#submit-btn-yelp").on("click", function(event) {
    event.preventDefault();
});

$("#submit-btn-yelp").on("click", function() {
    
    var city = $("#city-input").val().trim();
    var queryURL = "https://api.foursquare.com/v2/venues/explore?client_id=TBNVZDWBESTUA1VZ05GU50CHYIHRZM5NLDL5ICF00C2Z3EFM&client_secret=JFFXS5SDR055IYCWVUYECZHB0OEBW3CRNKHY1VEQJRMCOY4X&v=20180323&limit=5&near=" + city + "&query=restaurant";

    $.ajax({
        url: queryURL,
        method: "GET",

    })
    .then(function(response) {

        var results = response.response.groups[0].items

        for (var i = 0; i < results.length; i++) {
            var restaurantDiv = $("#rest-options");
            var h1 = $("<h3>").text(results[i].venue.name);
            var p = $("<p>").text(results[i].venue.location.address);
            restaurantDiv.append(h1);
            restaurantDiv.append(p);
            restaurants.push(results[i].venue.name);
        }
    });
});

$("#yelp-make-decision-btn").on("click", function(event) {
    event.preventDefault();
});

$("#yelp-make-decision-btn").on("click", function() {
    restaurantWinnerIndex = Math.floor(Math.random() * (restaurants.length));
    restaurantWinner = restaurants[restaurantWinnerIndex];
    winnerDiv = $("#yelp-decision-body");
    var h1 = $("<h3>").text(restaurantWinner);
    winnerDiv.append(h1);
});
