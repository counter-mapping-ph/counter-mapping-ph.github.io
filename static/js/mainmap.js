mapboxgl.accessToken = 'pk.eyJ1IjoiY291bnRlci1tYXBwaW5nLXBoIiwiYSI6ImNrMWl4czZ2dzEwcTEzbnA2ZHFheXJkMTIifQ.2H4nyU-vt_np5OLeeFWqrw';
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

    map.on('load', function(){
        map.addSource(
           'cmph', {
               type: 'geojson',
               data: 'static/data/counter-mapping-ph.geojson',
        });

        map.addLayer({
          'id': 'efforts',
          'type': 'symbol',
          'source': 'cmph',
          'layout': {
              'visibility': 'visible',
              "text-field": ["get", "name"]
          },
      });
    })

});
