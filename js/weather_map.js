"use strict";

// Map:

mapboxgl.accessToken = mapboxToken;
var coordinates = document.getElementById('coordinates');
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4916, 29.4260],
    zoom: 13
});

var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: marker
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

// Marker:

var marker = new mapboxgl.Marker({
    draggable: true,
    color: 'Steelblue',
})
    .setLngLat([-98.4916, 29.4260])
    .addTo(map);

// Draggable Function:

function onDragEnd() {
    var lngLat = marker.getLngLat();
    marker.setLngLat()
    coordinates.style.display = 'block';
    coordinates.innerHTML =
        'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
}

// Returns the search results and updates the cards with the weather at the current coordinates.

function onSearchResult(result) {
    // Need to get Lng/Lat from the geocoder
    // var lngLat = result;
    // console.log(lngLat);
    marker.setLngLat(result.result.center);
    // marker.setLngLat(lngLat)
    // coordinates.style.display = 'block';
    // coordinates.innerHTML =
    //     'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
}
// understand doc
// which doc is for what
// what functions do I have and how do I use them

marker.on('dragend', onDragEnd);

// Geocoding Function:

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}
geocoder.on("result", onSearchResult);

$(document).ready(function(){

    // AJAX request:

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log(data);
        var weatherObject = [];
        var dateCount = 0;
        for (var i = 0; i < 40; i++) {
            if (i % 8 === 0) {
                weatherObject[dateCount] = {}, weatherObject[dateCount].tempMin = data.list[i].main.temp_min, weatherObject[dateCount].tempMax = data.list[i].main.temp_max, weatherObject[dateCount].description = data.list[i].weather[0].description, weatherObject[dateCount].humidity = data.list[i].main.humidity, weatherObject[dateCount].wind = data.list[i].wind.speed, weatherObject[dateCount].pressure = data.list[i].main.pressure, weatherObject[dateCount].data = data.list[i].dt_txt, weatherObject[dateCount].icon = data.list[i].weather[0].icon
                dateCount++;
            }
        }

        // For loop to .append() elements and data to HTML:

        console.log(weatherObject);
        var deckOfCards = $("#cards").children()
        for (var i = 0; i < deckOfCards.length; i++) {
            var card = deckOfCards[i];
            console.log(weatherObject[i]);
            console.log(i);
            $(card).append('<div class="card-header">' + weatherObject[i].data + '</div>' + '<p class="card-title" style="text-align: center;">' + weatherObject[i].tempMin +  '/' + weatherObject[i].tempMax + '</p>' + '<p class="card-text">' + '<img style="margin: 0 auto;" src="http://openweathermap.org/img/wn/' + weatherObject[i].icon + '@2x.png"></p>' + '<p className="list-group list-group-flush">' + '<p className="list-group-item1">' + 'Description: ' + weatherObject[i].description + '</p>' + '<hr>' + '<p class="list-group-item2">' + 'Humidity: ' + weatherObject[i].humidity + '</p>' + '<hr>' + '<p class="list-group-item3">' + 'Wind: '+ weatherObject[i].wind + '</p>' + '<hr>' + '<p class="list-group-item4">' + 'Pressure: ' + weatherObject[i].pressure + '</p>' + '</p>' + '</div>');
        };

        // Search Button:

        $(".btn").click(function(e){
            e.preventDefault();
            geocode($('#geocoder').val(), mapboxToken).then(function(result){
            });
        });

        });
});

// TODO: Refer to your Mapbox API exercise. Recreate the map below your 5 day forecast. Read through the documentation for the Mapbox API and figure out how to allow the user to drop a pin on any place on the map. Once the user drops a pin, grab its coordinates and feed those into your OpenWeatherMap API. Update the five-day forecast with the information from those coordinates (you should also get rid of your input boxes at this point).


// TODO: Add a Mapbox text input to search by location and have the forecast update when a new location is searched.


// TODO: As a bonus make sure you can update the marker's position to the new search result.

