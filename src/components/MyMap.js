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
import 'components/myLeaflet.css';
import useGeoLocation from 'components/Hooks/useGeoLocation';
// import counties from '../data/us-county-boundaries.json'
import counties from '../data/counties.json';
// import L from 'leaflet';

function MyMap() {
  const userLocation = useGeoLocation();
  const position = [
    Number(userLocation.coordinates['lat']),
    Number(userLocation.coordinates['lng']),
  ];

  const { colorMode, toggleColorMode } = useColorMode();
  const onEachCounty = (county, layer) => {
    // layer.options.fillColor = county.properties.color;
    const name = county.properties.NAME;
    const confirmedText = county.properties.LSAD;
    layer.bindPopup(`${name} ${confirmedText}`);
  };
  return (
    <Box>
      {/* {counties.length === 0 ? ( <Spinner/> ) */}
      {/* : (  */}
      <BorderBox>
        <MapContainer
          center={[33.9, -118.39]}
          zoom={13}
          scrollWheelZoom={true}
          height={300}
        >
          <GeoJSON attribution="county data" data={counties} onEachFeature={onEachCounty} />
          <LayersControl position="topright">
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
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Stadia Maps">
              <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
              />
            </LayersControl.BaseLayer>

            {/* {colorMode === 'light' ? (
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            ) : (
              <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
              />
            )} */}

            {/* <Marker position={getUserLocation}> */}
            <Marker position={position}>
              <Popup>Where you are right now!</Popup>
            </Marker>
          </LayersControl>
        </MapContainer>
      </BorderBox>
      {/* )} */}
    </Box>
  );
}

export default MyMap;

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
