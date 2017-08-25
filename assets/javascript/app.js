var mapOptions = {
	    center: new google.maps.LatLng(37.7831,-122.4039),
	    zoom: 12,
	    mapTypeId: google.maps.MapTypeId.SATELLITE

	    };

		var markerOptions = {
		    position: new google.maps.LatLng(37.7831, -122.4039)
		
		};
		// var marker = new google.maps.Marker(markerOptions);
		
		//  var marker = new google.maps.Marker({
  //         position: new google.maps.LatLng(37.7831, -122.4039),
  //         map: $("#map"),
  //         title: 'Hello World!'
  //       });

			
			var map = new google.maps.Map(document.getElementById('map'), mapOptions);
			setMap(map);
}

		
function setMap(map){
	var marker = new google.maps.Marker({
          position: new google.maps.LatLng(37.7831, -122.4039),
          map: map,
          title: 'Hello World!'
        });
	return marker.setMap(map);
};





		