

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initMap() {


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
    //   anchorPoint: new google.maps.Point(0, -29)
    // });

    autocomplete.addListener('place_changed', function() {
    // infowindow.close();
    // marker.setVisible(false);
        var place = autocomplete.getPlace();
        console.log(place);

    // if (!place.geometry) {
    //   // User entered the name of a Place that was not suggested and
    //   // pressed the Enter key, or the Place Details request failed.
    //   window.alert("No details available for input: '" + place.name + "'");
    //   return;
    // }

    // If the place has a geometry, then present it on a map.
    // if (place.geometry.viewport) {
    //   map.fitBounds(place.geometry.viewport);
    // } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);  // Why 17? Because it looks good.
    // }
    console.log(place.geometry.location);
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
        var queryURL = "https://api.placeilive.com/v1/houses/search?ll=" + lat + "," + long;


        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response){



        

        });
   

    });
// fir childSnapshot taken from train example
    // var address=childSnapshot.val().address;
    // var transportation=childSnapshot.val().transportation;
    // var safety=childSnapshot.val().safety;
    // var health=childSnapshot.val().health;
    // var snl=childSnapshot.val().snl;
  
 
    // console.log(address);
    // console.log(transportation);
    // console.log(safety);
    // console.log(health);
    // console.log(snl);


    // $("tbody").append("<tr><td>" + address + "</td><td>" + transportation + "</td><td>" + safety + "</td><td>" + health + "</td><td>" + snl + "</td></tr>");
    
    //Clear boxes on Submit
    $("#address").val("");
    $("transportation").val("");
    $("saftey").val("");
    $("#health").val("");
    $("#snl").val("");
   
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
}

