"use strict";

mapboxgl.accessToken = mapboxToken;
var coordinates = document.getElementById('coordinates');
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
    center: [-98.4916, 29.4252],
    zoom: 9
});

var marker = new mapboxgl.Marker({
    draggable: true,
    color: 'green',
})
    .setLngLat([-98.4916, 29.4260])
    .addTo(map);


function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML =
        'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
}

marker.on('dragend', onDragEnd);

function geocode(place, mapboxToken) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(place) + '.json' + "?" + 'access_token=' + mapboxToken)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}


// let searchString;
//
// document.getElementById("search-button").addEventListener("click", function(){
//     geocode(searchString, mapboxToken).then(function(result){
//         console.log(result);
//         // map.setCenter(result); // i.e. map.setCenter([-98.48, 29.426])
//         map.flyTo({
//             center: result,
//             zoom: 14,
//             speed: 4,
//             curve: 1,
//         })
//         marker.setLngLat(result);
//     })
// });

$(document).ready(function(){

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
        console.log(weatherObject);
        var deckOfCards = $("#cards").children()
        for (var i = 0; i < deckOfCards.length; i++) {
            var card = deckOfCards[i];
            console.log(weatherObject[i]);
            console.log(i);
            $(card).append('<div class="card-header">' + weatherObject[i].data + '</div>' + '<p class="card-title" style="text-align: center;">' + weatherObject[i].tempMin +  '/' + weatherObject[i].tempMax + '</p>' + '<p class="card-text">' + '<img src="http://openweathermap.org/img/wn/' + weatherObject[i].icon + '@2x.png"></p>' + '<ul className="list-group list-group-flush">' + '<li className="list-group-item1">' + weatherObject[i].description + '</li>' + '<li class="list-group-item2>">' + weatherObject[i].humidity + '</li>' + '<li class="list-group-item3">' + weatherObject[i].wind + '</li>' + '<li class="list-group-item4">' + weatherObject[i].pressure + '</li>' + '</ul>' + '</div>');
        };
        //     $("#place").keyup(function() {
        //     var value = $(this).val();
        //     $("button").text(value);
        // })
        $(".btn").click(function(e){
            e.preventDefault();
            var value = $("#place").val();
        });

        });
});
