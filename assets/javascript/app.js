
//grabs google response and parses string into searchable components for the queryURL
var googleResponse = parseString {
	streetNumber: 0,
	streetAddress: streetAddress,
	city: city,
	state: state,
	zip: zip,
	
}
// ajax call for API
$.ajax({
   url: queryURL,
    method: "GET"
}).done(function(response) {

$(".panel-body").on("click", ".submit", function() {
 inputName = $(this).attr("data-name");
       queryURL="https:www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz1fyhgwn6qyz_8fetn&address=" + streetNumber + streetAddress + address2 + "&citystatezip=" + city + "%2C" + state + zip;
        gethouse();
       console.log(this).attr("data-name");

});
// Initial array of houses pulled from Zillow after google address pull
var house[results];

loop (i=0; i<house.length; i++);
results append table;
$("tbody").append("<tr><td>" + streetNumber + "</td><td>" + streetAddress + "</td><td>" + address2 + "</td><td>" + streetAddress + "</td><td>" + city + "</td><td>" + state + "</td><td>" + state + "</td></tr>");


