import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, useColorMode } from "@chakra-ui/react";
import BorderBox from 'components/SharedComponents/BorderBox';
import 'components/myLeaflet.css';

function MyMap() {
  const position = [51.505, -0.09]
  const { colorMode, toggleColorMode } = useColorMode();
  function ColorChoose() {
    if (colorMode === "light") {
      return "g_start";
    } else {
      return "g_end";
    }
  }
//   var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
// 	maxZoom: 20,
// 	attribution: '© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
// });
// L.tileLayer.provider('Stamen.Watercolor').addTo(map);
  return (
    <Box>

    <BorderBox>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        height={300}
      >
        {(colorMode === "light")  
          ? <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          : <TileLayer attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors' url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
        }

        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </BorderBox>
    </Box>
  );
}

export default MyMap;
