 // This example requires the Visualization library. Include the libraries=visualization
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

      var map, heatmap;



      var ordersGeoLocation_lat = new Array();
      var ordersGeoLocation_lng = new Array();
      var countOrder = 0;


      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: {lat: -9.168118, lng: -48.233509},
          mapTypeId: 'satellite'
        });

        heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPointsForOrder(),
          
          map: map
        });

      }

      function toggleHeatmap() {
        heatmap.setMap(heatmap.getMap() ? null : map);
      }

      function changeGradient() {
        var gradient = [
          'rgba(0, 255, 255, 0)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 127, 255, 1)',
          'rgba(0, 63, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 223, 1)',
          'rgba(0, 0, 191, 1)',
          'rgba(0, 0, 159, 1)',
          'rgba(0, 0, 127, 1)',
          'rgba(63, 0, 91, 1)',
          'rgba(127, 0, 63, 1)',
          'rgba(191, 0, 31, 1)',
          'rgba(255, 0, 0, 1)'
        ]
        heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
      }

      function changeRadius() {
        heatmap.set('radius', heatmap.get('radius') ? null : 20);
      }

      function changeOpacity() {
        heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
      }



      function getPointsForOrder()
      {
        var mapobject=new Array();
          var i = 0;
          for(i = 0; i < countOrder; i++){

               var object = new google.maps.LatLng(ordersGeoLocation_lat[i], ordersGeoLocation_lng[i]);
               mapobject.push(object);

          }
          return mapobject;
      }
