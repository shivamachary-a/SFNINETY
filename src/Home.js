import { isMobile } from "react-device-detect";
import { Grid, Box, VStack, Heading, ChakraProvider, HStack, Text } from '@chakra-ui/react';
import Frame3 from "./images/frame3";
import Frame1 from "./images/frame1";
import Frame2 from "./images/frame2";
import Frame4 from "./images/frame4";
function Home() {
    if (!isMobile) {
        return (
            <ChakraProvider>
                <Box bg="linear-gradient(90deg, rgba(55,11,194,0.6) 0%, rgba(9,43,254,0.8) 100%);"
                    backdropFilter="blur(18px)"
                >
                    <VStack>
                        <Grid templateColumns="repeat(2, 1fr)">
                            <Box textAlign="center" fontSize="xl" position="relative" display="flex" justifyContent="center" alignItems="center" h="100%" w="50vw" maxWidth="50vw">
                                <VStack style={{ overflow: "hidden" }}>
                                    <HStack>
                                        <img style={{ height: "auto", width: "40vw", position: "relative", boxShadow: "box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );" }} alt="" src="https://i.ibb.co/89dpvVX/Rotato-Snapshot-Black.png"></img>
                                        <img style={{ height: "auto", width: "40vw", position: "relative", left: "-20vw", boxShadow: "box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );" }} alt="" src="https://i.ibb.co/rHfLZwc/Rotato-Snapshot-White.png"></img>
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
                        <Grid templateColumns="repeat(2, 1fr)" bg="rgba(255,255,255,0.2)">
                            <Box p="2em" display="flex" justifyContent="start" alignItems="center" w="100%">
                                <VStack alignItems="start">
                                    <Heading size="3xl" color="white" style={{ textAlign: "left" }}>
                                        Save, spend, invest and trade, all from one place.
                                    </Heading>

                                </VStack>
                            </Box>
                            <Box p="2em" display="flex" justifyContent="center" alignItems="center" w="100%" background="#ffffff" style={{ imageRendering: "crisp-edges" }}>

                                <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)" bg="rgba(255,255,255,0.2)" columnGap="10vw" rowGap="10vh" fontWeight="bold">
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
                        </Grid>
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
                                    <img style={{ height: "auto", width: "100vw", position: "relative", boxShadow: "box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );" }} alt="" src="https://i.ibb.co/89dpvVX/Rotato-Snapshot-Black.png"></img>

                                    <img style={{
                                        height: "auto",
                                        width: "100vw",
                                        maxWidth: "100vw",
                                        position: "relative",
                                        left: "-60vw", boxShadow: "box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",

                                    }} alt="" src="https://i.ibb.co/rHfLZwc/Rotato-Snapshot-White.png"></img>
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

                    </VStack>

                </Box>
            </ChakraProvider>

        )
    }
}

export default Home;