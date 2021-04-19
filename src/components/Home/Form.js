import React from 'react';
import {
  Tag,
  Box,
  Text,
  Stack,
  HStack,
  // Radio,
  ButtonGroup,
  Center,
  useColorMode,
} from '@chakra-ui/react';
import {
  // CheckboxContainer,
  // CheckboxControl,
  // CheckboxSingleControl,
  // InputControl,
  NumberInputControl,
  PercentComplete,
  // RadioGroupControl,
  ResetButton,
  // SelectControl,
  SliderControl,
  SubmitButton,
  SwitchControl,
  // TextareaControl,
} from 'formik-chakra-ui';
// import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
// import BorderBox from 'components/SharedComponents/BorderBox';
import { Formik } from 'formik';
import * as Yup from 'yup';


const initialValues = {
  lowerValue: '',
  upperValue: '',
  stateCounty: false, //state = false county = true
  risk: '',
  bar: '',
};

const validationSchema = Yup.object({
  lowerValue: Yup.number().required().min(0),
  upperValue: Yup.number().moreThan(
    Yup.ref('lowerValue'),
    'Upper Limit must be bigger than Lower Limit'
  ).required(),
  stateCounty: Yup.boolean(),
  risk: Yup.number().required(),
  bar: Yup.string(),
});

const Form = ({ onClose, onSubmit }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  function ColorChoose() {
    if (colorMode === 'light') {
      return 'g_start';
    } else {
      return 'g_end';
    }
  }

  const riskColor = e => {
    if (e <= 33) {
      return 'green.300';
    } else if (33 < e && e < 66) {
      return 'yellow.300';
    } else {
      return 'red.400';
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, values, errors }) => (
        <Box
          borderWidth="1px"
          rounded="lg"
          borderColor={ColorChoose}
          p={5}
          as="form"
          onSubmit={handleSubmit}
        >
          <Text mt={4}> Real Estate Prices</Text>
          <Stack px={5} direction={['column', 'row', 'row']} align="center">
            <NumberInputControl name="lowerValue" label="Lower Limit ($)" />
            <Text> to </Text>
            <NumberInputControl name="upperValue" label="Upper Limit ($)" />
          </Stack>

          <Box my={5}>
            <HStack my={2}>
              <Text>How much risk are you willing to take?*</Text>
              <Tag bg={riskColor(values.risk)}>
                <Text fontWeight="bold">{values.risk} %</Text>{' '}
              </Tag>
            </HStack>
            <HStack mx={5}>
              <Text color="green">0%</Text>
              <SliderControl name="risk" />
              <Text color="red">100%</Text>
            </HStack>
          </Box>

          <Box my={5}>
            <HStack>
            <Text>State</Text>
            <SwitchControl name="stateCounty" label="" />
            <Text>County</Text>
            </HStack>
          </Box>

          <PercentComplete />
          <Center>
            <ButtonGroup>
              {/* <SubmitButton bg="g_start" onClick={onClose}> */}
              <SubmitButton bg="g_start">
                Submit
              </SubmitButton>
              <ResetButton>Reset</ResetButton>
            </ButtonGroup>
          </Center>

          <Box as="pre" marginY={10}>
            {JSON.stringify(values, null, 2)}
            <br />
            {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default Form;