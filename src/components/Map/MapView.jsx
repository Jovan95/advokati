import React from 'react';
import { render } from 'react-dom';
import 'leaflet/dist/leaflet.css';
import 'leaflet';

import './MapView.scss';

class MapView extends React.Component {
  componentDidMount() {
    const L = window['L']; // eslint-disable-line
    const mymap = L.map('mapid', { scrollWheelZoom: false }).setView([43.2858773, 20.7998124], 13);
    const marker = L.marker([43.2858773, 20.7998124]).addTo(mymap);
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxla3NhOTUiLCJhIjoiY2tkOWRqcHc3MDdjejMxdDl5dXRsemNjcSJ9.NhYk1ECHhHkaDbu0-sXGvQ', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      accessToken: 'pk.eyJ1IjoiYnJpc2tlIiwiYSI6ImNrM3JjOXJqaDA4azgzY3BzZG55eWlmeDgifQ.mDElSQi6qXno3ge1H2eUXA',
    }).addTo(mymap);
  }

  render() {
    return (
      <div className="leaf-map-wrapper">
        <div id="mapid" style={{ width: '100%', height: '100%', margin: '40px 0px 0px 50px' }} />
      </div>
    );
  }
}


export default MapView;
