const backButton = document.getElementById('back');

backButton.onclick = function () {
            history.back()
        }

console.log(`Розмір екрану: ${screen.width}x${screen.height}px`);

function initMap() {
    navigator.geolocation.getCurrentPosition(function (position) {
        const adress = new google.maps.Geocoder();
        const geoRequest = {};
        geoRequest.location = {lng: position.coords.longitude, lat: position.coords.latitude };
        adress.geocode(geoRequest, function (a, b) {
            if(b === google.maps.GeocoderStatus.OK){
                console.log('Ваша адреса:' + a[0].formatted_address);
            }

        });
    })
}
