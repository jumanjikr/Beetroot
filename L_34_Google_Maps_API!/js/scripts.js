window.onload = () => {
  let map;
  let directionsService = new google.maps.DirectionsService();
  let directionsRenderer = new google.maps.DirectionsRenderer();
  let startAuto = document.getElementById('start');
  let endAuto = document.getElementById('end');
  let autocompleteStart = new google.maps.places.Autocomplete(startAuto);
  let autocompleteEnd = new google.maps.places.Autocomplete(endAuto);

  function initMap() {


    // The location of Mykolai
    let nyc = new google.maps.LatLng(46.9645497, 32.0056523);
    let mapOptions = {
      zoom: 12,
      center: nyc,
    };


    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsRenderer.setMap(map);
    autocompleteStart.bindTo('bounds', map);
    // Set the data fields to return when the user selects a place.
    autocompleteStart.setFields(['address_components', 'geometry', 'icon', 'name']);
    autocompleteEnd.bindTo('bounds', map);
    // Set the data fields to return when the user selects a place.
    autocompleteEnd.setFields(['address_components', 'geometry', 'icon', 'name']);
    autocompleteStart.addListener('place_changed', function () {
      let place = autocompleteStart.getPlace();
      if (!place.geometry) {
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }
      let address = '';
      if (place.address_components) {
        address = [
          (place.address_components[0] && place.address_components[0].short_name || ''),
          (place.address_components[1] && place.address_components[1].short_name || ''),
          (place.address_components[2] && place.address_components[2].short_name || '')
        ].join(' ');
      }
    });
    autocompleteEnd.addListener('place_changed', function () {
      let place = autocompleteEnd.getPlace();
      if (!place.geometry) {
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }
      let address = '';
      if (place.address_components) {
        address = [
          (place.address_components[0] && place.address_components[0].short_name || ''),
          (place.address_components[1] && place.address_components[1].short_name || ''),
          (place.address_components[2] && place.address_components[2].short_name || '')
        ].join(' ');
      }
    });
  }

  function calcRoute() {
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;
    let selectedMode = document.getElementById('mode').value;
    let request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode[selectedMode]

    }
    directionsService.route(request, function (response, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(response);
      }
    });
  };

  document.getElementById('result').onclick = function (event) {
    event.preventDefault();
    calcRoute();
  };

  initMap();

};