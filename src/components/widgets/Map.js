import React, { Component } from 'react';

class Map extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const map = L.map('mapid').setView([51.505, -0.09], 13);

    const greenIcon = L.icon({
      iconUrl: 'http://leafletjs.com/docs/images/leaf-orange.png',
      shadowUrl: 'http://leafletjs.com/docs/images/leaf-shadow.png',
      iconSize: [38, 95],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76],
    });

    L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);
  }

  render() {
    return (
      <div className="map">
        <div id="mapid"></div>
      </div>
    );
  }
}

export default Map;
