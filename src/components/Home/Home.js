import React, { useState } from 'react';
import { Heading, Box, Button, Center, useDisclosure } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import Form from 'components/Home/Form';
import Banner from 'components/Home/Banner';
import MyMap from 'components/Map/MyMap';

const Home = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <>
      <Box>
      <Banner />
      <Center>
        <Button bg="g_start" align="center" color="white" onClick={onOpen}>
          Let's  start the magic
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxW="50rem">
            <ModalHeader>
              <Heading align="center">Filters</Heading>
              </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Form onClose={onClose} />
            </ModalBody>
          </ModalContent>
          <ModalFooter>
            hi
          </ModalFooter>
        </Modal>
      </Center>
      <MyMap />
      </Box>
    </>
  );
};

export default Home;
