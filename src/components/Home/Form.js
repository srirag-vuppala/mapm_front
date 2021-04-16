import React, { useState } from 'react';
import {
  Box,
  Divider,
  Heading,
  Text,
  Grid,
  GridItem,
  Stack,
  Button,
  FormLabel,
  FormControl,
  InputGroup,
  Input,
  Radio,
  ButtonGroup,
  InputLeftElement,
  InputRightElement,
  FormErrorMessage,
  useColorMode
} from '@chakra-ui/react';
import {
  CheckboxContainer,
  CheckboxControl,
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
  PercentComplete,
  RadioGroupControl,
  ResetButton,
  SelectControl,
  SliderControl,
  SubmitButton,
  SwitchControl,
  TextareaControl,
} from 'formik-chakra-ui';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import BorderBox from 'components/SharedComponents/BorderBox';
import { Formik, Form as FormikForm, Field } from 'formik';
import * as Yup from 'yup';

// Yup validations
// const validateRange = Yup.object().shape({
//   lowervalue: Yup.number(),
//   // upperValue: Yup.number().when('lowerValue', (lowerValue, schema) => {
//   //     return schema.test({
//   //       test: upperValue=> !!lowerValue&& upperValue> lowerValue,
//   //       message: "Max should be > min"
//   //     })
//   //   }),
//   upperValue: Yup.number().moreThan(Yup.ref('lowerValue'), "Max should be more than min")
//   // upperValue: Yup.number().when(
//   //       ["lowerValue", "upperValue"],
//   //       (lowerValue: number, upperValue: number, schema: any) => {
//   //           return !!lowerValue&& lowerValue!==upperValue
//   //               ? schema.moreThan(
//   //                       lowerValue,
//   //                       "Max should be > min"
//   //                 )
//   //               : schema;
//   //       }
//   // ),
// })

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
  firstName: '',
  lastName: '',
  age: 0,
  employed: false,
  favoriteColor: '',
  toppings: ['tuna'],
  notes: '',
  employedd: false,
  select: '',
  foo: 23,
  bar: '',
};
const validationSchema = Yup.object({
  lowerValue: Yup.number().required().min(0),
  upperValue: Yup.number().moreThan(
    Yup.ref('lowerValue'),
    'Upper Limit must be bigger than Lower Limit'
  ),
  firstName: Yup.string(),
  lastName: Yup.string(),
  age: Yup.number().min(18),
  employed: Yup.boolean().equals([true]),
  favoriteColor: Yup.string(),
  toppings: Yup.array().min(2),
  notes: Yup.string(),
  employedd: Yup.boolean().equals([true]),
  select: Yup.string(),
  foo: Yup.number(),
  bar: Yup.string(),
});

const Form = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  function ColorChoose() {
    if (colorMode === "light") {
      return "g_start";
    } else {
      return "g_end";
    }
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, values, errors }) => (
        //       <BorderBox m={15}>
        <Box
          borderWidth="1px"
          rounded="lg"
          boxShadow="dark-lg"
          borderColor={ColorChoose}
          maxWidth={800}
          p={6}
          m="10px auto"
          as="form"
          onSubmit={handleSubmit}
        >
        <Heading>Filters</Heading>
        <Divider />
          <Text mt={4}> Real Estate Prices</Text>
          <Stack
            px={5}
            direction={['column', 'row', 'row']}
            align="center"
            >
            <NumberInputControl name="lowerValue" label="Lower Limit ($)" />
            <Text> to </Text>
            <NumberInputControl name="upperValue" label="Upper Limit ($)" />
          </Stack>
          <Text>Medium life Expectancy</Text>
          <SliderControl name="foo" />
          <SelectControl
            name="select"
            selectProps={{ placeholder: 'Select option' }}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </SelectControl>
          {/* <InputControl name="firstName" label="First Name" />
          <InputControl name="lastName" label="Last Name" /> */}
          <NumberInputControl name="age" label="Last Name" />
          <CheckboxSingleControl name="employed">
            Employed
          </CheckboxSingleControl>
          <RadioGroupControl name="favoriteColor" label="Favorite Color">
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
          <TextareaControl name="notes" label="Notes" />
          <SwitchControl name="employedd" label="Employed" />

          {/* <SliderControl name="foo" sliderProps={{ max: 40 }} /> */}

          <PercentComplete />
          <ButtonGroup>
            <SubmitButton bg="g_start">Submit</SubmitButton>
            <ResetButton>Reset</ResetButton>
          </ButtonGroup>

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
