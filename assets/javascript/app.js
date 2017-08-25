
//grabs google response and parses string into searchable components for the queryURL
// var googleResponse = parseString {
// 	streetNumber: 0,
// 	streetAddress: streetAddress,
// 	city: city,
// 	state: state,
// 	zip: zip,
	
// }
// // ajax call for API
// $.ajax({
//    url: queryURL,
//     method: "GET"
// }).done(function(response) {

// $(".panel-body").on("click", ".submit", function() {
//  inputName = $(this).attr("data-name");
//        queryURL="https:www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz1fyhgwn6qyz_8fetn&address=" + streetNumber + streetAddress + address2 + "&citystatezip=" + city + "%2C" + state + zip;
//         gethouse();
//        console.log(this).attr("data-name");

// });
// // Initial array of houses pulled from Zillow after google address pull
// var latLong = ("");

// loop (i=0; i<house.length; i++);
// // results append table;
// $("tbody").append("<tr><td>" + streetNumber + "</td><td>" + streetAddress + "</td><td>" + address2 + "</td><td>" + streetAddress + "</td><td>" + city + "</td><td>" + state + "</td><td>" + state + "</td></tr>");





function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: new google.maps.LatLng(2.8,-187.3),
      mapTypeId: 'terrain'
    });

    // Create a <script> tag and set the USGS URL as the source.
    var script = document.createElement('script');
    // This example uses a local copy of the GeoJSON stored at
    // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
    script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
    document.getElementsByTagName('head')[0].appendChild(script);
  }


//   // Loop through the results array and place a marker for each
//   // set of coordinates.
//   window.eqfeed_callback = function(results) {
//     for (var i = 0; i < results.features.length; i++) {
//       var coords = results.features[i].geometry.coordinates;
//       var latLng = new google.maps.LatLng(coords[1],coords[0]);
//       var marker = new google.maps.Marker({
//         position: latLng,
//         map: map
//       });
//     }

// google.maps.places.Autocomplete


// var mapOptions = {
//     center: new google.maps.LatLng(37.7831,-122.4039),
//     zoom: 12,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
// };

// var map = new google.maps.Map(document.getElementById('map'), mapOptions);
// var acOptions = {
//   types: ['establishment']
// };
// var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'),acOptions);
// autocomplete.bindTo('bounds',map);
// var infoWindow = new google.maps.InfoWindow();
// var marker = new google.maps.Marker({
//   map: map
// });

// google.maps.event.addListener(autocomplete, 'place_changed', function() {
//   infoWindow.close();
//   var place = autocomplete.getPlace();
//   if (place.geometry.viewport) {
//     map.fitBounds(place.geometry.viewport);
//   } else {
//     map.setCenter(place.geometry.location);
//     map.setZoom(17);
//   }
//   marker.setPosition(place.geometry.location);
//   infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
//   infoWindow.open(map, marker);
//   google.maps.event.addListener(marker,'click',function(e){

//     infoWindow.open(map, marker);

//   });
// });
