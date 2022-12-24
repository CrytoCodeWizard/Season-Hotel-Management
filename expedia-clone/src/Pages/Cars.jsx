import React from 'react'
import { Heading, Box, Center, Image, Text } from '@chakra-ui/react'
import SearchBar from '../Components/SearchBar'
import { Stack, Flex, Grid, SimpleGrid } from '@chakra-ui/layout'
import { Input, Button } from "@chakra-ui/react";
import Footer from '../Components/Footer';
import { Link } from '@chakra-ui/react'
import { Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'

const Cars = () => {
    return (
        <div>
            <Center>
                <Box textAlign={'left'} w={'80%'} >
                    <Heading p={'20px'}>Search Cars</Heading>
                </Box>
            </Center>
            <SearchBar />
            <Center>
                <Box textAlign={'left'} w={'80%'} >
                    <Heading p='20px'>Ideas for your next trip</Heading>
                </Box>
            </Center>
            <Center>
                <Box marginTop={'30px'} borderRadius={'10px'} m={'10px'} border={'1px solid black'} w={'80%'}>
                    <Image h={'300px'} borderRadius={'10px'} w={'100%'} src='https://tpc.googlesyndication.com/simgad/8965138777747150339?' />
                    <Box p='20px' textAlign={'left'}>
                        <Text fontSize={'25px'}>
                            Flexible Hotel deals
                        </Text>
                        <Text>
                            Here’s a great selection of hotels offering free cancellation if your plans change. Because flexibility matters.
                        </Text>
                    </Box>
                </Box>
            </Center>
            <Center m={'20px'}>
                <Image src='https://tpc.googlesyndication.com/simgad/13652272202320797916?' />
            </Center>
            <Center marginTop={'50px'}>
                <Image
                    borderRadius={"10px"}
                    w={"80%"}
                    h="400px"
                    src="https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg"
                    alt="Dan Abramov"
                />
            </Center>
            <br />


            {/* App section  */}
            <Center>


                <Box w={'90%'} >


                    <Stack
                        w={{ sm: "90%", md: "90%", lg: "80%" }}
                        m={["50px 10px", "50px auto", "50px auto", "50px auto"]}
                        gap="2.5rem"
                    >
                        <Flex
                            direction={["column", "column", "column", "row"]}
                            w="100%"
                            borderRadius="8px"
                            border="0.2px solid gray"
                        >
                            <Box w={["100%", "100%", "100%", "35%"]}>
                                <Image
                                    h={["400px", "400px", "400px", "100%"]}
                                    w="100%"
                                    borderRadius="8px"
                                    src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg"
                                    alt="Dan Abramov"
                                />
                            </Box>

                            <Flex
                                direction={["column", "column", "row"]}
                                w={["100%", "100%", "100%", "75%"]}
                                p="24px"
                                justify="space-between"
                                gap="1rem"
                            >
                                <Box w={["100%", "100%", "100%", "75%"]}>
                                    <Heading>Our app takes you further</Heading>
                                    <Text fontSize="sm" mt="0.5rem">
                                        When you book on the app you can save even more up to 20% on
                                        select hotels while earning double the points with every
                                        booking. With these app deals you'll save even more on
                                        trips, and that means you can take more trips, and manage it
                                        all on the go.
                                    </Text>
                                    <Heading marginBottom={5} fontSize="lg" mt="1.5rem">
                                        Text yourself a download link for easy access
                                    </Heading>
                                    <Flex align="center" gap="0.8rem">
                                        <Input w="100px" borderRadius="10px" value={"India 91+"} />
                                        <Input w="150px" type="text" placeholder="Phone Number" />
                                        <Button

                                            colorScheme="blue"
                                            w="150px"
                                            borderColor="gray"
                                            _hover="none"
                                        >
                                            Get the app
                                        </Button>
                                    </Flex>
                                    <Text m="10px" textAlign="left" fontSize="xs">
                                        By providing your number, you agree to receive a one-time
                                        automated text message with a link to get the app. Standard
                                        text message rates may apply.
                                    </Text>
                                </Box>

                                <Box
                                    w={["30%", "35%", "35%", "29%"]}
                                    m={["auto", "auto", "auto"]}
                                >

                                    {/* QR Code  */}

                                    <Image
                                        w="100%"
                                        h={["60%", "65%", "70%", "75%"]}
                                        src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/27_QR_FOOTER_BNA_HP.png"
                                        alt="Dan Abramov"
                                    />
                                    <Text textAlign="center"> Scan the QR code</Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </Stack>
                </Box>
            </Center>
            <br />
            <br />

            {/* Tabs  */}
            <Center>
                <Box textAlign={'left'} w={'70%'}>
                    <Heading paddingLeft={'15px'} fontSize={'20px'}>More trips option</Heading>
                    <Tabs variant='enclosed'>
                        <TabList>
                            <Tab>Explore a world of travel with expedia</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel >

                                <Text fontWeight={'bold'}>Other types of car hire</Text>
                                <SimpleGrid w={'90%'} minChildWidth='190px' spacing='40px'>
                                    <Box>
                                        <Link color='blue'>One way car hire</Link>
                                    </Box>
                                    <Box>
                                        <Link color={'blue'}>Long term Car Hire</Link>
                                    </Box>
                                </SimpleGrid>
                                <SimpleGrid w={'90%'} minChildWidth='190px' spacing='40px'>
                                    <Box>
                                        <Link color='blue'>Short Term car hire</Link>
                                    </Box>
                                    <Box>
                                        <Link color={'blue'}>Search airport Transportation</Link>
                                    </Box>
                                </SimpleGrid>

                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Center>
            <Box m={'50px'}>
                <Text fontWeight={'bold'}>
                    Explore a world of travel with Expedia
                </Text>
                <Link color='blue'>
                    See our travel option
                </Link>
            </Box>
            <hr />

            <Footer />

        </div>
    )
}

export default Cars
