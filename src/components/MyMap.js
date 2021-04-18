import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from 'react-leaflet';
import { Box, useColorMode } from '@chakra-ui/react';
import BorderBox from 'components/SharedComponents/BorderBox';
import 'components/myLeaflet.css';
import useGeoLocation from 'components/Hooks/useGeoLocation';

function MyMap() {
  const userLocation = useGeoLocation();
  const position = [Number(userLocation.coordinates['lat']), Number(userLocation.coordinates['lng'])];
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

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <BorderBox>
        <MapContainer
          center={[33.9, -118.39]}
          zoom={13}
          scrollWheelZoom={true}
          height={300}
        >
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
    </Box>
  );
}

export default MyMap;
