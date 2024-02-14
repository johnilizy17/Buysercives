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
  IconButton,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const toast = useToast();
  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(5, "Too Short! add more than 5 characters")
      .max(50, "Too Long!")
      .required("please fill in your password"),
    email: Yup.string()
      .email("Invalid email")
      .required("Please Email is Required"),
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
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            setLoading(true);
            toast({
              position: "bottom-right",
              title: "Successfully logged in",
              description: "Logged in",
              status: "success",
              isClosable: true,
            });
            setTimeout(() => {
              setLoading(false);
            }, 2000);
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
                  <div style={{ color: "red", marginTop: 10 }}>
                    {errors.email}
                  </div>
                ) : null}
              </Box>
              <Box marginBottom="24px">
                <Box fontWeight="600" color="#6c757d" marginBottom="8px">
                  Password
                </Box>
                <Flex>
                  <Field
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "1px solid #ced4da",
                      padding: "0.45rem 0.9rem",
                      broderRadius: "0.2rem",
                    }}
                    type={disable? "text":"password"}
                    placeholder="Enter your password"
                    name="password"
                  />
                  <Center
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid #ced4da",
                      padding: "0.45rem 0.9rem",
                    }}  
                  >
                    <IconButton
                      onClick={() => {
                        setDisable(!disable);
                      }}
                    >
                      {!disable ? (
                        <svg
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                          <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                          <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                        </svg>
                      ) : (
                        <svg
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                        </svg>
                      )}
                    </IconButton>
                  </Center>
                </Flex>
                {errors.password && touched.password ? (
                  <div style={{ color: "red", marginTop: 10 }}>
                    {errors.password}
                  </div>
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
