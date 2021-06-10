import { isMobile } from "react-device-detect";
import { Grid, Box, VStack, Heading, ChakraProvider, HStack, GridItem, Text } from '@chakra-ui/react';

function Home() {
    if (!isMobile) {
        return (
            <ChakraProvider>
                <Box bg="linear-gradient(90deg, rgba(55,11,194,0.6) 0%, rgba(9,43,254,0.8) 100%);"
                    backdropFilter="blur(18px)"
                >
                    <VStack>
                        <Grid templateColumns="repeat(2, 1fr)">
                            <Box textAlign="center" fontSize="xl" position="relative" display="flex" justifyContent="center" alignItems="center" h="100vh" w="50vw" maxWidth="50vw">
                                <VStack>
                                    <HStack>
                                        <img style={{ height: "auto", width: "20vw", position: "relative", boxShadow: "box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );" }} alt="" src="https://i.ibb.co/89dpvVX/Rotato-Snapshot-Black.png"></img>

                                        <img style={{ height: "auto", width: "20vw", position: "relative", left: "-10vw", boxShadow: "box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );" }} alt="" src="https://i.ibb.co/rHfLZwc/Rotato-Snapshot-White.png"></img>
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
                            <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)">
                                <GridItem maxH="30vh" >
                                    <VStack>
                                        <img style={{ height: "20vh" }} alt="" src=" https://cdn.discordapp.com/attachments/692861972731002995/852620831485329438/STONKS.png"></img>
                                        <Heading fontSize="20" style={{ position: "relative", top: "-5vh", wordWrap: "normal" }}>Invest in stocks, shares and index funds.</Heading>
                                    </VStack>
                                </GridItem>
                                <GridItem maxH="30vh">
                                    <VStack>
                                        <img style={{ height: "20vh" }} alt="" src="https://cdn.discordapp.com/attachments/692861972731002995/852630049790361620/algo.png"></img>
                                        <Heading fontSize="20" style={{ position: "relative", top: "-5vh", wordWrap: "normal" }}>Deploy algorithms or write scripts to trade for you.</Heading>
                                    </VStack>
                                </GridItem>
                                <GridItem maxH="30vh">
                                    <VStack>
                                        <img style={{ height: "20vh" }} alt="" src="https://cdn.discordapp.com/attachments/692861972731002995/852620994761195600/STONKS.png"></img>
                                        <Heading fontSize="20" style={{ position: "relative", top: "-5vh", wordWrap: "normal" }}>Invest in stocks, shares and index funds.</Heading>
                                    </VStack>
                                </GridItem>
                                <GridItem maxH="30vh">
                                    <VStack>
                                        <img style={{ height: "20vh" }} alt="" src="https://cdn.discordapp.com/attachments/692861972731002995/852620831485329438/STONKS.png"></img>
                                        <Heading fontSize="20" style={{ position: "relative", top: "-5vh", wordWrap: "normal" }}>Invest in stocks, shares and index funds.</Heading>
                                    </VStack>
                                </GridItem>
                                <GridItem maxH="30vh" >
                                    <VStack>
                                        <img style={{ height: "20vh" }} alt="" src="https://cdn.discordapp.com/attachments/692861972731002995/852620994761195600/STONKS.png"></img>
                                        <Heading fontSize="20" style={{ position: "relative", top: "-5vh", wordWrap: "normal" }}>Invest in stocks, shares and index funds.</Heading>
                                    </VStack>
                                </GridItem>
                                <GridItem maxH="30vh">
                                    <VStack>
                                        <img style={{ height: "20vh" }} alt="" src="https://cdn.discordapp.com/attachments/692861972731002995/852620994761195600/STONKS.png"></img>
                                        <Heading fontSize="20" style={{ position: "relative", top: "-5vh", wordWrap: "normal" }}>Invest in stocks, shares and index funds.</Heading>
                                    </VStack>
                                </GridItem>
                                <GridItem maxH="30vh">
                                    <VStack>
                                        <img style={{ height: "20vh" }} alt="" src="https://cdn.discordapp.com/attachments/692861972731002995/852620994761195600/STONKS.png"></img>
                                        <Heading fontSize="20" style={{ position: "relative", top: "-5vh", wordWrap: "normal" }}>Invest in stocks, shares and index funds.</Heading>
                                    </VStack>
                                </GridItem>
                                <GridItem maxH="30vh">
                                    <VStack>
                                        <img style={{ height: "20vh" }} alt="" src="https://cdn.discordapp.com/attachments/692861972731002995/852620994761195600/STONKS.png"></img>
                                        <Heading fontSize="20" style={{ position: "relative", top: "-5vh", wordWrap: "normal" }}>Invest in stocks, shares and index funds.</Heading>
                                    </VStack>
                                </GridItem>
                            </Grid>
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