import React from 'react';
import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react';
import Nav  from 'components/SharedComponents/Nav.js';
import Footer from 'components/SharedComponents/Footer.js';
import Home from 'components/Home/Home';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

import theme from './theme.js'
import "@fontsource/raleway/400.css"
import "@fontsource/open-sans/700.css"


function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <head><link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script></head> */}
      <Router>
        <Box>
        <Nav />
        <Switch>
          {/* <Route exact path="/featured" component={Featured} /> */}
          {/* <Route exact path="/about" component={About} /> */}
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;

  //  {/* <Box textAlign="center" fontSize="xl">
  //       <Grid minH="100vh" p={3}>
  //         <ColorModeSwitcher justifySelf="flex-end" />
  //         <VStack spacing={8}>
  //           <Logo h="40vmin" pointerEvents="none" />
  //           <Text>
  //             Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
  //           </Text>
  //           <Link
  //             color="teal.500"
  //             href="https://chakra-ui.com"
  //             fontSize="2xl"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Learn Chakra
  //           </Link>
  //         </VStack>
  //       </Grid>
  //     </Box> */}