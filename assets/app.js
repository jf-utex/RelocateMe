// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initMap() {

    var modal = document.getElementById('myModal');
            // Get the button that opens the modal
    
      // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };


    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.773972, lng: -122.431297},
    zoom: 12
    });
    //var card = document.getElementById('pac-card');
    var input = document.getElementById('pac-input');
    // var types = document.getElementById('type-selector');
    var strictBounds = document.getElementById('strict-bounds-selector');

    //map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

    var autocomplete = new google.maps.places.Autocomplete(input);

    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo('bounds', map);

    // var infowindow = new google.maps.InfoWindow();
    // var infowindowContent = document.getElementById('infowindow-content');
    // infowindow.setContent(infowindowContent);
    // var marker = new google.maps.Marker({
    //   map: map,
    //   anchorPoint: new google.maps.Point(lat, long)
    // });

    autocomplete.addListener('place_changed', function() {
    // infowindow.close();
    // marker.setVisible(false);
        var place = autocomplete.getPlace();
        console.log(place);



   // Add a marker at San Francisco with an azure colored marker.
   //   markerMarker = map.add(new.MarkerOptions(){
   //     position: place;
   //     title: place;
   //     snippet: "hello people"
   //     icon: (BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_AZURE)
   // });


    if (!place.geometry) {
    //   // User entered the name of a Place that was not suggested and
    //   // pressed the Enter key, or the Place Details request failed.
    //   window.alert("No details available for input: '" + place.name + "'");
    
    var noDetails =  "No details available for input";
    var eerespond = $('<div>');
    $("#eerespond").text(noDetails);

    // Get the modal
        modal.style.display = 'block'

        
        
    
        // When the user clicks on the button, open the modal 


        // When the user clicks on <span> (x), close the modal
       // $('myModal').on('hidden', function () {
       //  $.clearInput();
       //  });

       return;
      
    }
        

    // If the place has a geometry, then present it on a map.
    // if (place.geometry.viewport) {
    //   map.fitBounds(place.geometry.viewport);
    // } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);  // Why 17? Because it looks good.
    // }
    console.log(place.geometry.location);

            new google.maps.Marker({
                position: place.geometry.location,
                map: map,
                title: 'asdfasf',
                icon: {
                    path: SQUARE_PIN,
                    fillColor: 'blue',
                    fillOpacity: 1,
                    strokeColor: '',
                    strokeWeight: 0
                },
                map_icon_label: '<span class="map-icon map-icon-point-of-interest"></span>'

                // fillColor: "#4285f4"
        });
    // marker.setPosition(place.geometry.location);
    // marker.setVisible(true);

    // var address = '';
    // if (place.address_components) {
    //   address = [
    //     (place.address_components[0] && place.address_components[0].short_name || ''),
    //     (place.address_components[1] && place.address_components[1].short_name || ''),
    //     (place.address_components[2] && place.address_components[2].short_name || '')
    //   ].join(' ');
    // }

    // infowindowContent.children['place-icon'].src = place.icon;
    // infowindowContent.children['place-name'].textContent = place.name;
    // infowindowContent.children['place-address'].textContent = address;
    // infowindow.open(map, marker);

        var latLong = place.geometry.location;

        

        // var lat = latLong.slice(1, 12);
        // var long = latLong.slice(13, 32);         
        var lat = latLong.lat();
        var long = latLong.lng();
        var queryURL = "https://www.refugerestrooms.org:443/api/v1/restrooms/by_location.json?lat=" + lat + "&lng=" + long;


        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response){
            console.log(response);
                response.map(function(item) {
                    var markers = {name:item.name, lat:item.latitude, long:item.longitude};
                    console.log(markers);
                    
                    // Display multiple markers on a map
                    var infoWindow = new google.maps.InfoWindow(), marker, i;
                    
                    // Loop through our array of markers & place each one on the map  
                   
                        var position = new google.maps.LatLng(markers.lat, markers.long);
                        //bounds.extend(position);
                        marker = new google.maps.Marker({
                            position: position,
                            map: map,
                            title: markers.name,
                            icon: {
                                path: SQUARE_PIN,
                                fillColor: 'red',
                                fillOpacity: 1,
                                strokeColor: '',
                                strokeWeight: 0
                            },
                            map_icon_label: '<span class="map-icon map-icon-point-of-interest"></span>'

                            // fillColor: "#4285f4"
                        });

                        // var marker1 = new Marker({
                        //     map: map,
                        //     position: new google.maps.LatLng(-27.46577, 153.02303),
                            // icon: {
                            //     path: SQUARE_PIN,
                            //     fillColor: '#00CCBB',
                            //     fillOpacity: 1,
                            //     strokeColor: '',
                            //     strokeWeight: 0
                            // },
                        //     map_icon_label: '<span class="map-icon map-icon-point-of-interest"></span>'
                        // });
                        
                        // Allow each marker to have an info window    
                        google.maps.event.addListener(marker, 'click', (function(marker, i) {
                            return function() {
                                infoWindow.setContent(markers.name);
                                infoWindow.open(map, marker);
                            }
                        })(marker, i));

                        // Automatically center the map fitting all markers on the screen
                       map.fitBounds(bounds);
                    
            var mapResponse = response;


            for (i = 0 ; i < mapResponse.length; i++){
            $("table > tbody").append("<tr><td>" + mapResponse[i].name + "</td><td>" + mapResponse[i].street + "</td><td>" + mapResponse[i].city + "</td><td>" + mapResponse[i].state + "</td><td>" + mapResponse[i].comment );
        }

                })

            })
        })

        
    }

  

    


  
    
    //Clear boxes on Submit
    // $("#name").val("");
    // $("#street").val("");
    // $("#city").val("");
    // $("#state").val("");
   
   
    // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.
    // function setupClickListener(id, types) {
    //   var radioButton = document.getElementById(id);
    //   radioButton.addEventListener('click', function() {
    //     autocomplete.setTypes(types);
    //   });
    // }

    // setupClickListener('changetype-all', []);
    // setupClickListener('changetype-address', ['address']);
    // setupClickListener('changetype-establishment', ['establishment']);
    // setupClickListener('changetype-geocode', ['geocode']);

    // document.getElementById('use-strict-bounds')
    //     .addEventListener('click', function() {
    //       console.log('Checkbox clicked! New state=' + this.checked);
    //       autocomplete.setOptions({strictBounds: this.checked});
    //     });

