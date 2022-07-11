

function cargarMapa() {
    let contador = 0;
    var map = L.map('map').setView([41.42220114084455, 2.187254592375578], 15);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            maxZoom: 18,
            attribution: '© OpenStreetMap'
        }).addTo(map);

    //Añado el icono de ubicación   
    var marcador = L.marker([41.42220114084455, 2.187254592375578], { draggable: true }).addTo(map);
    //Mensaje info Ubicación
    var popup = L.popup()
     .setLatLng([41.42220114084455, 2.187254592375578])
     .setContent("Empresa: <b>Be Smart</b> <br/>"+ 
         " Dirección: Avinguda Meridiana 292<br/>")
     .openOn(map);
    //Funcion para recoger la posición del usuario    
    navigator.geolocation.getCurrentPosition(function (position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        //console.log(latitude, longitude);

        //Marco dicha posision en el mapa
        L.marker([latitude, longitude], { draggable: true }).addTo(map);

        //Genero la ruta desde las coordenadas del user hasta el negocio
        L.Routing.control({
            waypoints: [
                L.latLng(latitude, longitude),
                L.latLng(41.42220114084455, 2.187254592375578)
            ], routeWhileDragging: true, language: 'es'
        }).addTo(map);

    });

    map.on('click', function(e) {
            var latlng = map.mouseEventToLatLng(e.originalEvent);
            console.log(latlng.lat + ', ' + latlng.lng);
            var popup = L.popup()
            .setLatLng([latlng.lat, latlng.lng])
            .setContent(`Coordenadas: ${[latlng.lat, latlng.lng]}`)
            .openOn(map);
    });
}
