import React, { useState } from "react";
import {
  Center,
  Box,
  Flex,
  Text,
  Img,
  Button,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function Home() {


  const [ loading, setLoading] = useState(false)
  const toast = useToast()
  const SignupSchema = Yup.object().shape({
     password: Yup.string().min(5, "Too Short! add more than 5 characters").max(50, "Too Long!").required("please fill in your password"),
    email: Yup.string().email("Invalid email").required("Please Email is Required"),
  });

  return (
    <Center
      w="100vw"
      p={"4.5rem 23px"}
      justifyContent={["start", "center"]}
      flexDir="column"
      h="100vh"
      bg="#8c024e"
    >
      <Center
        boxShadow="rgba(154, 161, 171, 0.15)"
        borderRadius="0.25rem"
        border="1px soild #f7f7f7"
        backgroundColor="#f7f7f7"
        w={["100%", "450px"]}
        padding="2.25rem"
        marginBottom="12px"
        flexDir="column"
        h="516px"
        justifyContent="start"
      >
        <Img h="22px" src="../favicon.ico" />
        <Text
          marginTop="1.5rem"
          textAlign="center"
          padding="0px 30px"
          color="#98A6AD"
          w={["100%", "350px"]}
          marginBottom="2.25rem"
        >
          Enter your email address and password to access your Aspire Always
          account.
        </Text>
        <Formik
          initialValues={{
            email: "",
            password:""
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            setLoading((true))
               toast({
                position: "bottom-right",
                title: "Successfully logged in",
                description: "Logged in",
                status: "success",
                isClosable: true
            })
            setTimeout(()=>{
              setLoading(false)
            }, 2000)
          }}
        >
          {({ errors, touched }) => (
            <Form style={{ width: "100%" }}>
              <Box marginBottom="24px">
                <Box fontWeight="600" color="#6c757d" marginBottom="8px">
                  Email Address
                </Box>
                <Field
                  style={{
                    width: "100%",
                    height: "40px",
                    border: "1px solid #ced4da",
                    padding: "0.45rem 0.9rem",
                    broderRadius: "0.2rem",
                  }}
                  placeholder="Enter your email"
                  name="email"
                  type="email"
                />
                {errors.email && touched.email ? (
                  <div style={{color:"red", marginTop:10}}>{errors.email}</div>
                ) : null}
              </Box>
              <Box marginBottom="24px">
                <Box fontWeight="600" color="#6c757d" marginBottom="8px">
                  Password
                </Box>
                <Field
                  style={{
                    width: "100%",
                    height: "40px",
                    border: "1px solid #ced4da",
                    padding: "0.45rem 0.9rem",
                    broderRadius: "0.2rem",
                  }}
                  placeholder="Enter your password"
                  name="password"
                />
                {errors.password && touched.password ? (
                  <div style={{color:"red", marginTop:10}}>{errors.password}</div>
                ) : null}
              </Box>
              <Checkbox fontWeight="500" color="#6C757D" mb="30px">
                Remember me
              </Checkbox>
              <Button
                w="100%"
                colorScheme="blue"
                backgroundColor="#3283f6"
                color="#fff"
                type="submit"
                isDisabled={loading}
                isLoading={loading}
              >
                Log in
              </Button>
            </Form>
          )}
        </Formik>
      </Center>
      <Text color="#ffffff80" marginBottom="1rem">
        {" "}
        Forgot your password?
      </Text>
      <Flex>
        <Box color="#ffffff80" marginRight="1em">
          Don't have an account?
        </Box>
        <Box color="rgba(255, 255, 255)" fontWeight="700">
          Sign Up
        </Box>
      </Flex>
    </Center>
  );
}
