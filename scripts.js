/*************   GOOGLE MAPS  ***********/
// Initialize and add the map
function initMap() {
    const gliwiceLocation = { lat: 50.307611, lng: 18.663559 }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: gliwiceLocation
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: gliwiceLocation,
        map: map,
    });
}

