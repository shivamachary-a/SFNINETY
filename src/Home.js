import { Box, Button, ChakraProvider, FormControl, FormErrorMessage, FormLabel, Grid, Heading, HStack, Input, VStack, Text } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { isMobile } from "react-device-detect";
import dark from './images/dark.png'
import light from './images/light.png'
function Home() {
    if (!isMobile) {
        return (
            <ChakraProvider>
                <Box bg="linear-gradient(90deg, rgba(55,11,194,0.6) 0%, rgba(9,43,254,0.8) 100%);"
                    backdropFilter="blur(18px)"
                >
                    <VStack spacing="0px">
                        <Grid templateColumns="repeat(2, 1fr)" overflow="hidden">
                            <Box textAlign="center" fontSize="xl" position="relative" display="flex" justifyContent="center" alignItems="center" h="100%" w="50vw" maxWidth="50vw">
                                <VStack style={{ overflow: "hidden" }}>
                                    <HStack overflow="hidden">
                                        <img style={{ height: "auto", width: "40vw", position: "relative", boxShadow: "box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );", }} alt="" src={dark}></img>
                                        <img style={{ height: "auto", width: "40vw", position: "relative", left: "-20vw", boxShadow: "box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );" }} alt="" src={light}></img>
                                    </HStack>
                                </VStack>
                            </Box>
                            <Box p="2em" display="flex" justifyContent="start" alignItems="center" w="100%">
                                <VStack alignItems="start">
                                    <Heading size="3xl" color="white" style={{ textAlign: "left" }}>
                                        Meet SF90, the UK's first complete financial ecosystem built from the ground up with a focus on sustainability, ethics and community.
                                    </Heading>

                                </VStack>
                            </Box>
                        </Grid>
                        <VStack spacing="10px" justifyContent="center" alignItems="start" h="100%" p={"2em"} background="white" style={{ imageRendering: "crisp-edges" }} w="100vw" minH="30em" maxH="75vh">
                            <Text fontSize="1.5vw" color="black">It takes a lot of effort to invest your money, save, trade, or control your finances properly <b>already</b> - there's a lack of education; the right tools are really expensive, and traditional financial institutions haven't really caught up in terms of technology and sustainability.</Text>
                            <Text fontSize="1.5vw" color="black">We're trying to change that.</Text>
                            <Text fontSize="1.5vw" color="black">Save, invest, trade and spend, without having to ever compromise on your morals.</Text>
                            <Text fontSize="1.5vw" color="black">A carbon neutral bank that lets you earn interest from the ethical and community driven investments we make (and you get a say in), and a complete financial ecosystem surrounding it.</Text>
                            <Heading fontSize="3vw" color="black">That's SF90.</Heading>
                        </VStack>
                        <Box justifyContent="center" alignItems="center" h="100%" p={"3em"} background="linear-gradient(90deg, rgba(55,11,194,0.6) 0%, rgba(9,43,254,0.8) 100%);" style={{ imageRendering: "crisp-edges" }} w="100vw" overflow="visible">
                            <Heading size="lg" mb={"1em"} color="white">Subscribe to our mailing list to be the first to know when we launch</Heading>
                            <FormikExample />

                        </Box>
                        {/* <Grid templateColumns="repeat(1, 1fr)" bg="rgba(255,255,255,0.2)">
                            <Box p="2em" display="flex" justifyContent="center" alignItems="center" w="100%" background="#ffffff" style={{ imageRendering: "crisp-edges" }}>

                                <Grid templateColumns="repeat(4, 1fr)" templateRows="repeat(1, 1fr)" bg="rgba(255,255,255,0.2)" columnGap="10vw" rowGap="10vh" fontWeight="bold">
                                    <VStack>
                                        <Frame3 h="25vh" w="25vh"></Frame3>
                                        <Text textAlign="center">Earn interest on your savings. All of our investments are ethical, so you can rest assured that the interest you earn is derived from sustainable practices.</Text>
                                    </VStack>
                                    <VStack>
                                        <Frame1 h="25vh" w="25vh"></Frame1>
                                        <Text textAlign="center">Invest in stocks, shares, index funds and cryptocurrencies, commission free. Whether you're a pro or just getting started, there's something for you.</Text>
                                    </VStack>
                                    <VStack>
                                        <Frame2 h="25vh" w="25vh"></Frame2>
                                        <Text textAlign="center">Choose prewritten algorithms, strategies, and ML models, or write your own and deploy them directly into our systems.</Text>
                                    </VStack>
                                    <VStack>
                                        <Frame4 h="25vh" w="25vh"></Frame4>
                                        <Text textAlign="center">Trade stocks, shares, cryptocurrencies and derivatives with competitive fees and professional grade tools.</Text>

                                    </VStack>
                                </Grid>
                            </Box>
                        </Grid> */}
                    </VStack>
                </Box >
            </ChakraProvider >


        );

    } else {
        return (
            <ChakraProvider>
                <Box bg="linear-gradient(90deg, rgba(55,11,194,0.7) 0%, rgba(9,43,254,0.8) 100%);"
                    backdropFilter="blur(18px)"
                >
                    <VStack>
                        <Box textAlign="center" fontSize="xl" position="relative" display="flex" justifyContent="center" alignItems="center" h="100vh" maxWidth="100vw" overflow="hidden">
                            <VStack>
                                <HStack>
                                    <img style={{ height: "auto", width: "100vw", position: "relative", boxShadow: "box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );", imageRendering:"crisp-edges"}} alt="" src={light}></img>

                                    <img style={{
                                        height: "auto",
                                        width: "100vw",
                                        maxWidth: "100vw",
                                        position: "relative",
                                        imageRendering:"-moz-crisp-edges",
                                        left: "-60vw", boxShadow: "box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",

                                    }} alt="" src={dark}></img>
                                </HStack>
                            </VStack>
                        </Box>
                        <Box p="2em" display="flex" justifyContent="start" alignItems="center" w="100%">
                            <VStack alignItems="start">
                                <Heading size="3xl" color="white" style={{ textAlign: "left" }}>
                                    Meet SF90, the UK's first complete financial ecosystem built from the ground up with a focus on sustainability, ethics and community.
                                </Heading>

                            </VStack>
                        </Box>
                        <VStack spacing="10px" justifyContent="center" alignItems="start" h="100vh" p={"1em"} background="white" style={{ imageRendering: "crisp-edges" }} w="100vw" minH="100vh">
                            <Text fontSize="4vw" color="black">It takes a lot of effort to invest your money, save, trade, or control your finances properly <b>already</b> - there's a lack of education; the right tools are really expensive, and traditional financial institutions haven't really caught up in terms of technology and sustainability.</Text>
                            <Text fontSize="4vw" color="black">We're trying to change that.</Text>
                            <Text fontSize="4vw" color="black">Save, invest, trade and spend, without having to ever compromise on your morals.</Text>
                            <Text fontSize="4vw" color="black">A carbon neutral bank that lets you earn interest from the ethical and community driven investments we make (and you get a say in), and a complete financial ecosystem surrounding it.</Text>
                            <Heading fontSize="4xl" color="black">That's SF90.</Heading>
                        </VStack>
                        <Box justifyContent="center" alignItems="center" h="100%" p={"3em"} background="linear-gradient(90deg, rgba(55,11,194,0.6) 0%, rgba(9,43,254,0.8) 100%);" style={{ imageRendering: "crisp-edges" }} w="100vw" overflow="visible">
                            <Heading size="lg" mb={"1em"} color="white">Subscribe to our mailing list to be the first to know when we launch</Heading>
                            <FormikExample />

                        </Box>

                    </VStack>

                </Box>
            </ChakraProvider>

        )
    }
}
const FormikExample = () => {
    function validateName(value) {
      let error
      if (!value) {
        error = "Email is required"
      } 
      return error
    }
  
    return (
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values, actions) => {
          await fetch("https://2pff26hyr4.execute-api.eu-west-2.amazonaws.com/email", {
              method: "POST",
              mode: "no-cors",
              body: JSON.stringify({
                  email: values.email
              })
          })

        }}
      >
        {(props) => (
          <Form>
            <Field name="email" validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="email" color="white">Email</FormLabel>
                  <Input {...field} id="email" placeholder="email" color="white" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="gray"
              variant="outline"
              color="white"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    )
  }

export default Home;