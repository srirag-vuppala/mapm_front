import React from 'react';
import { Box, Text, Center, Flex, Icon } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const gradient = 'repeating-linear(to-l, g_start, g_end)';
  return (
    <>
      <Box h="5rem" p={5} bgGradient={gradient} >
          <Center>
          <Flex justify="center" direction="column" >
                <Text color="white">Made with <Icon color="red" as={FaHeart} /></Text>
                <Text color="white"> by Srirag Vuppala and Shehbaj Dhillon </Text>
          </Flex>
          </Center>
      </Box>
    </>
  );
};

export default Footer;
