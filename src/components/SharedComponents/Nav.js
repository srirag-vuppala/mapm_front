import React from 'react';
import {
  Box,
  Text,
  HStack,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from 'components/SharedComponents/ColorModeSwitcher';
import { Logo } from 'components/SharedComponents/Logo' 

const Nav = () => {
  const gradient = 'repeating-linear(to-l, g_start, g_end)';
  return (
    <>
      <Box p={3} bgGradient={gradient} borderRadius="0" boxShadow="dark-lg">
        <Flex
          justify="space-between"
          direction="horizontal"
          align="center"
          color="white"
        >
          {/* probably put the color switch here */}
          {/* Add icon */}
          <Box>
            <ColorModeSwitcher justifySelf="flex-start" />
          </Box>
          <HStack spacing="10px">
            <Box>
              <Link to="/">
                <Text fontSize="xl" fontWeight="bold">
                  mapM
                </Text>
              </Link>
            </Box>
            <Box>
                <Logo />
            </Box>
          </HStack>
          <Box></Box>
          {/* <Link><ListItem>About</ListItem></Link> */}
        </Flex>
      </Box>
    </>
  );
};

export default Nav;
