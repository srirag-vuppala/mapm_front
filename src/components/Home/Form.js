import React from 'react';
import {
  Tag,
  Box,
  Text,
  Stack,
  HStack,
  Radio,
  ButtonGroup,
  Center,
  useColorMode,
} from '@chakra-ui/react';
import {
  CheckboxContainer,
  CheckboxControl,
  // CheckboxSingleControl,
  // InputControl,
  NumberInputControl,
  PercentComplete,
  RadioGroupControl,
  ResetButton,
  SelectControl,
  SliderControl,
  SubmitButton,
  SwitchControl,
  // TextareaControl,
} from 'formik-chakra-ui';
// import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
// import BorderBox from 'components/SharedComponents/BorderBox';
import { Formik } from 'formik';
import * as Yup from 'yup';

// const Form = () => {

//   const validateIcon = e => {
//     if (e === true) {
//       return <CheckIcon color="green.500" />;
//     }
//     if (e === false) {
//       return <CloseIcon color="red.500" />;
//     }
//   };

//   return (
//     <>
//       <BorderBox m={15}>
//         <Heading>Filters</Heading>
//         <Divider /
//         <Grid>
//           {/* Real Estate prices */}
//           <Text>Range of Real Estate Prices</Text>
//           <Formik
//             initialValues={{ lowerValue: 0, upperValue: 0}}
//             validationSchema={validateRange}
//             onSubmit={(values, actions) => {
//               setTimeout(() => {
//                 alert(JSON.stringify(values, null, 2));
//                 actions.setSubmitting(false);
//               }, 1000);
//             }}
//           >
//             {(props) => (
//               // <FormikForm>
//                 <Stack
//                   px={5}
//                   py={5}
//                   direction={['column', 'column', 'row', 'row']}
//                   align="center"
//                 >
//                   <Field lowerValue="lowerValue" >
//                     {({ field, form }) => (
//                       <FormControl
//                         isInvalid={form.errors.name && form.touched.name}
//                       >
//                         {/* <FormLabel htmlFor="lowerValue"></FormLabel> */}
//                         <InputGroup>
//                           <InputLeftElement
//                             pointerEvents="none"
//                             color="gray.300"
//                             fontSize="1.2em"
//                             children="$"
//                           />
//                           <Input {...field} onChange={props.handleChange} id="lowerValue" value={props.lowerValue} placeholder="Lower Limit" />
//                           {/* <InputRightElement children={validateIcon(false)} /> */}
//                           <FormErrorMessage>{form.errors.lowerValue}</FormErrorMessage>
//                         </InputGroup>
//                       </FormControl>
//                     )}
//                   </Field>

//                   <Text> to </Text>

//                   <Field upperValue="upperValue" >
//                     {({ field, form }) => (
//                       <FormControl
//                         isInvalid={form.errors.name && form.touched.name}
//                       >
//                         {/* <FormLabel htmlFor="lowerValue"></FormLabel> */}
//                         <InputGroup>
//                           <InputLeftElement
//                             pointerEvents="none"
//                             color="gray.300"
//                             fontSize="1.2em"
//                             children="$"
//                           />
//                           <Input {...field} onChange={props.handleChange} id="upperValue" value={props.upperValue} placeholder="Upper Limit" />
//                           {/* <InputRightElement children={validateIcon(true)} /> */}
//                           <FormErrorMessage>{form.errors.upperValue}</FormErrorMessage>
//                         </InputGroup>
//                       </FormControl>
//                     )}
//                     </Box>
//                   {/* </Field> */}
//                 </Stack>
//               // </FormikForm>
//             )}
//           </Formik>

//             <Text>Median Wage</Text>
//             <Text>Life Expectancy</Text>
//             <Text>Covid Section</Text>
//             <Text>Vaccinations</Text>
//             <Text>Infections</Text>
//         </Grid>
//       </BorderBox>
//     </>
//   );
// };

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = values => {

  sleep(300).then(() => {
    window.alert(JSON.stringify(values, null, 2));
  });
};

const initialValues = {
  lowerValue: 0,
  upperValue: 1,
  lifeExpectancy: false,
  firstName: '',
  lastName: '',
  age: 0,
  employed: false,
  favoriteColor: '',
  toppings: ['tuna'],
  employedd: false,
  select: '',
  ageGroup: '',
  foo: 23,
  bar: '',
};
const validationSchema = Yup.object({
  lowerValue: Yup.number().required().min(0),
  upperValue: Yup.number().moreThan(
    Yup.ref('lowerValue'),
    'Upper Limit must be bigger than Lower Limit'
  ),
  lifeExpectancy: Yup.boolean(),
  firstName: Yup.string(),
  lastName: Yup.string(),
  age: Yup.number().min(18),
  employed: Yup.boolean().equals([true]),
  favoriteColor: Yup.string(),
  toppings: Yup.array().min(1),
  employedd: Yup.boolean().equals([true]),
  select: Yup.string(),
  ageGroup: Yup.string(),
  foo: Yup.number(),
  bar: Yup.string(),
});

const Form = ({onClose}) => {
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
      // onSubmit={(e) => onClose}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, values, errors }) => (
        <Box
          borderWidth="1px"
          rounded="lg"
          // boxShadow="dark-lg"
          borderColor={ColorChoose}
          p={5}
          // mx={6}
          as="form"
          onSubmit={handleSubmit}
        >
          {/* <Heading align="center">Filters</Heading> */}
          {/* <Divider /> */}
          <Text mt={4}> Real Estate Prices</Text>
          <Stack px={5} direction={['column', 'row', 'row']} align="center">
            <NumberInputControl name="lowerValue" label="Lower Limit ($)" />
            <Text> to </Text>
            <NumberInputControl name="upperValue" label="Upper Limit ($)" />
          </Stack>

          <Box my={5}>
            <HStack my={2}>
              <Text>How much risk are you willing to take?*</Text>
              <Tag bg={riskColor(values.foo)}>
                <Text fontWeight="bold">{values.foo} %</Text>{' '}
              </Tag>
            </HStack>
            <HStack mx={5}>
              <Text color="green">0%</Text>
              <SliderControl name="foo" />
              <Text color="red">100%</Text>
            </HStack>
          </Box>

          <Box my={5}>
            <Text>What is the income level you want to be in?</Text>
            <SelectControl
              name="select"
              px={5}
              selectProps={{ placeholder: 'Select option' }}
            >
              <option value="option1">less than $30,000</option>
              <option value="option2">$30,000 - $60,000</option>
              <option value="option3">$60,000 - $90,000</option>
              <option value="option4">$90,000 - $120,000</option>
              <option value="option5">more than $120,000 </option>
            </SelectControl>
          </Box>

          <Box my={5}>
            <Text>What age group do you want to live in?</Text>
            <SelectControl
              name="ageGroup"
              px={5}
              selectProps={{ placeholder: 'Select option' }}
            >
              <option value="option1">20 - 30 years</option>
              <option value="option2">30 - 50 years</option>
              <option value="option3">more than 50 years</option>
            </SelectControl>
          </Box>

          <Box my={5}>
            <SwitchControl
              name="lifeExpectancy"
              label="Consider Life Expectancy?"
            />
            {/* <CheckboxSingleControl
              name="lifeExpectancy"
              label="Consider Life Expectancy?"
            /> */}
          </Box>

          <RadioGroupControl name="favoriteColor" label="Vaccinations">
            <Radio value="#ff0000">Red</Radio>
            <Radio value="#00ff00">Green</Radio>
            <Radio value="#0000ff">Blue</Radio>
          </RadioGroupControl>
          <CheckboxContainer name="toppings" label="Toppings">
            <CheckboxControl name="toppings" value="chicken">
              Chicken
            </CheckboxControl>
            <CheckboxControl name="toppings" value="ham">
              Ham
            </CheckboxControl>
            <CheckboxControl name="toppings" value="mushrooms">
              Mushrooms
            </CheckboxControl>
            <CheckboxControl name="toppings" value="cheese">
              Cheese
            </CheckboxControl>
            <CheckboxControl name="toppings" value="tuna">
              Tuna
            </CheckboxControl>
            <CheckboxControl name="toppings" value="pineapple">
              Pineapple
            </CheckboxControl>
          </CheckboxContainer>

          <PercentComplete />
          <Center>

          <ButtonGroup>
            <SubmitButton bg="g_start" onClick={onClose}>Submit</SubmitButton>
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
