mapboxgl.accessToken = 'pk.eyJ1IjoiY291bnRlci1tYXBwaW5nLXBoIiwiYSI6ImNrMGpzOTl6ZDBlNmkzanNid3kzeWVlMTQifQ.7vpFDBJqj7aAPoFoCuemSQ';

$(document).ready(function(){

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/counter-mapping-ph/ck0jsx3dc3rqd1cpex6hixwcy',
        center: [121.7740, 12.8797],
        zoom: 5,
        minZoom: 4,
        maxZoom: 18,
        // maxBounds: [[124.95, 11.03], [125.05, 11.08]]
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

});
