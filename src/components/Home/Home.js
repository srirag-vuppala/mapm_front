import React, { useState, useEffect } from 'react';
import { Heading, Box, Button, Center, useDisclosure } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import Form from 'components/Home/Form';
import Banner from 'components/Home/Banner';
import MyMapState from 'components/Map/MyMapState';
import MyMapCounty from 'components/Map/MyMapCounty';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const [formData, setFormData] = useState({});

  useEffect ( () => {
    setFormData(formData);
  }, [formData])

  const get_stateCounty = () => {
    if(formData === {}){
      return null
    }
    else{
      // if (formData['stateCounty'] === true){
      if (formData['stateCounty'] === true){
        return "county"
      }
      else {
        return "state"
      }
    }
  }

  const onSubmit_Form = values => {
    sleep(100).then(() => {
      // window.alert(JSON.stringify(values, null, 2));
      // setFormData(JSON.stringify(values, null, 2));
      setFormData(values);
    });
  };

  return (
    <>
      <Box>
        <Banner />
        <Center>
          <Button bg="g_start" align="center" color="white" onClick={onOpen}>
            Let's start the magic
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxW="50rem">
              <ModalHeader>
                <Heading align="center">Filters</Heading>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Form onClose={onClose} onSubmit={onSubmit_Form} />
              </ModalBody>
            </ModalContent>
            <ModalFooter>hi</ModalFooter>
          </Modal>
        </Center>
        {(formData['stateCounty'] === true)? (
          <MyMapCounty />
        ):(
          <MyMapState />
        )
        }
      </Box>
    </>
  );
};

export default Home;
