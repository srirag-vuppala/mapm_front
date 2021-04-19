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
// import counties from '../data/us-county-boundaries.json'
import states from '../../data/states.json';
import states_loc from '../../data/state_loc.json';
import { popupContent, popupHead, popupText, okText } from './popupStyles';

import L from 'leaflet';

const stateDict = {
  AL: 'Alabama',
  AK: 'Alaska',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  FL: 'Florida',
  GA: 'Georgia',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming',
};

function MyMapState(props) {
  const userLocation = useGeoLocation();
  const position = [
    Number(userLocation.coordinates['lat']),
    Number(userLocation.coordinates['lng']),
  ];

  const onEachState = (state, layer) => {
    const name = state.properties.NAME;
    const confirmedText = state.properties.LSAD;
    layer.bindPopup(`${name} ${confirmedText}`);
    // for (let i = 0; i < props.points.length; i++) {
    //   if (stateDict[props.points[i]['state']] === state.properties.NAME) {
    //     console.log('hi');
    //     layer.setStyle({ color: 'red' });
    //   }
    // }
    // layer.bindPopup(`${name} ${confirmedText}`, {{ fillcolor: colorMatch(state) }});
  };

  return (
    <Box>
      <BorderBox>
        <MapContainer
          center={[35.3, -120.65]}
          zoom={13}
          scrollWheelZoom={true}
          height={300}
        >
          <GeoJSON
            attribution="states data"
            data={states}
            onEachFeature={onEachState}
            addTo="OpenStreetMap.Mapnik"
          />
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

            <Marker position={position}>
              <Popup>Where you are right now!</Popup>
            </Marker>

            {props.points.map(point => {
              return (
                <Marker
                  key={Math.random()}
                  position={states_loc[point['state']]}
                >
                  <Popup className="request-popup">
                    <div style={popupContent}>
                      <div className="m-2" style={popupHead}>
                        State code : {point['state']}
                      </div>
                      <span style={popupText}>
                        This area would be a great fit for your requirements
                      </span>
                      <br />
                      <span style={popupText}>
                        <b>Covid Status :</b>
                      </span>
                      <div className="m-2" style={okText}>
                       number of confirmed cases {point['total_vaccinations']} 
                      </div>
                      <div className="m-2" style={okText}>
                        <b>Overall risk assessment </b>: {point['risk'].toPrecision(3)}
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

export default MyMapState;
