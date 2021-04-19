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
import axios from 'axios';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const [formData, setFormData] = useState({
    lowerValue: 0,
    upperValue: 1,
    stateCounty: false, //state = false county = true
    risk: 0,
    bar: '',
  });
  const [points, setPoints] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const makeAPIMagicCall = () => {
      let type_d;
      if (formData['stateCounty'] === true) {
        // counties
        type_d = 1;
      } else {
        // states
        type_d = 0;
      }

      const lower = formData['lowerValue'];
      const upper = formData['upperValue'];
      const risk = formData['risk'];

      axios
        .get(
          `http://3.136.236.189:8080/risk?range=${lower},${upper}&level=${type_d}&risk=${risk}`
        )
        .then(res => {
          const p = res.data;
          setPoints(p);
          return res.statuscode === 200;
        })
        .catch(error => {
          console.log(error.response);
        });
    };
    makeAPIMagicCall();
  }, [formData]);


  const onSubmit_Form = async (values, { setStatus, resetForm }) => {
    sleep(100).then(() => {
      // window.alert(JSON.stringify(values, null, 2));
      // setFormData(JSON.stringify(values, null, 2));
      if (values !== {}) {
        setFormData(values);
        setReady(true);
      }
    });
  };

  return (
    <>
      <Box>
        <Banner />
        <Center>
          <Button bg="g_start" align="center" color="white"  onClick={onOpen} m={5} >
            Click me!
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
          </Modal>
        </Center>
        {ready === true && (formData['stateCounty'] === true ? (
          <MyMapCounty points={points} />
        ) : (
          <MyMapState points={points} />
        ))}
      </Box>
    </>
  );
};

export default Home;
