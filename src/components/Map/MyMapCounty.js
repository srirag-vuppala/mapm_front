import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  GeoJSON,
  Popup,
  LayersControl,
} from 'react-leaflet';
import { Spinner, Box, useColorMode } from '@chakra-ui/react';
import BorderBox from 'components/SharedComponents/BorderBox';
import 'components/Map/myLeaflet.css';
import useGeoLocation from 'components/Hooks/useGeoLocation';
import counties from '../../data/counties.json';
import counties_loc from '../../data/counties_loc.json';
import { popupContent, popupHead, popupText, okText } from './popupStyles';

function MyMapCounty(props) {
  const userLocation = useGeoLocation();
  const position = [
    Number(userLocation.coordinates['lat']),
    Number(userLocation.coordinates['lng']),
  ];

  // const { colorMode, toggleColorMode } = useColorMode();
  const onEachCounty = (county, layer) => {
    // layer.options.fillColor = colorMatch(county);
    const name = county.properties.NAME;
    const confirmedText = county.properties.LSAD;
    layer.bindPopup(`${name} ${confirmedText}`);
  };

  // const getAbbreviation = word => {
  //   const fullName = word.split(' ');
  //   const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
  //   return initials.toUpperCase();
  // };

  return (
    <Box>
      <BorderBox>
        <MapContainer
          center={[35.3, -120.65]}
          zoom={13}
          scrollWheelZoom={true}
          height={300}
        >
          <LayersControl position="topright">
            <GeoJSON
              attribution="county data"
              data={counties}
              onEachFeature={onEachCounty}
            />
            <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
              />
              <GeoJSON
                attribution="county data"
                data={counties}
                onEachFeature={onEachCounty}
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Stadia Maps">
              <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
              />
            </LayersControl.BaseLayer>

            <Marker position={position}>
              <Popup>Where you are right now!</Popup>
            </Marker>

            {props.points.map(point => {
              console.log(point['id']);
              return (
                <Marker
                  key={Math.random()}
                  // position={counties_loc[point['id']]}
                  position={[point['lat'], point['lng']]}
                >
                  <Popup className="request-popup">
                    <div style={popupContent}>
                      <div className="m-2" style={popupHead}>
                        County code : {point['state']}
                      </div>
                      <span style={popupText}>
                        This area would be a great fit for your requirements
                      </span>
                      <br />
                      <span style={popupText}>
                        <b>Covid Status here :</b>
                      </span>
                      <div className="m-2" style={okText}>
                        number of confirmed cases {point['total_vaccinations']}
                      </div>
                      <div className="m-2" style={okText}>
                        <b>Overall risk assessment </b>:{' '}
                        {point['risk'].toPrecision(3)}
                      </div>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </LayersControl>
        </MapContainer>
      </BorderBox>
    </Box>
  );
}

export default MyMapCounty;

// function getUserLocation() {
//   // if (userLocation !== undefined || JSON.stringify(userLocation) !== '{}') {
//   let position = [0, 0];
//   // if (userLocation.loaded === true && userLocation.coordinates !== null) {
//   if (JSON.stringify(userLocation) !== '{}') {
//       position = [Number(userLocation.coordinates['lat']), Number(userLocation.coordinates['lng'])];
//       // position[1] = Number(userLocation.coordinates['lng']);
//   }
//   else {
//     position = [51.505, -0.09];
//   }
//   return position;
// }
