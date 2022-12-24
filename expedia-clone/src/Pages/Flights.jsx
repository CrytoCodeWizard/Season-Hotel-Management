import React from 'react'
import { Heading, Box, Center, Image, Text } from '@chakra-ui/react'
import SearchBar from '../Components/SearchBar'
import { Stack, Flex, Grid, SimpleGrid } from '@chakra-ui/layout'
import { Input, Button } from "@chakra-ui/react";
import Footer from '../Components/Footer';
import { Link } from '@chakra-ui/react'
import { Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'


const Flights = () => {
    return (
        <div>
            <Center>
                <Box textAlign={'left'} w={'80%'} >
                    <Heading p={'20px'}>Search Flights</Heading>
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


                <Box w={'80%'} >


                    <Center>
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
                    </Center>


                    {/* Only text  */}

                    <Center textAlign={'left'}>
                        <SimpleGrid w={'90%'} minChildWidth='190px' spacing='40px'>
                            <Box >
                                <Text fontWeight={'bold'}>
                                    Tips for Booking a Hotel
                                </Text>
                                <Text>
                                    No holiday is complete without the right hotel. If you're looking to plan an unforgettable trip, you'll need to find the right place to stay. Learn how you can book the right hotel for your needs whether you're taking the family on holiday, travelling with someone special or just taking some time away for yourself.
                                </Text>
                            </Box>
                            <Box >
                                <Text fontWeight={'bold'}>
                                    Tips for Booking a Hotel
                                </Text>
                                <Text>
                                    The cheapest hotels are easy to find if you know what factors you need to consider. The time of year you travel plays a big role, with cheap hotel rooms being more common during the off-season. Additionally, the star rating of the hotel and the kinds of amenities you opt for can all play a big part. Just keep in mind that these are all general trends rather than universal rules. Don't forget that you can sort your search results by price to put the cheapest options at the top of your results.
                                </Text>
                            </Box>
                        </SimpleGrid>
                    </Center>

                    {/* second grid  */}
                    <Center textAlign={'left'}>
                        <SimpleGrid w={'90%'} minChildWidth='190px' spacing='40px'>
                            <Box >
                                <Text fontWeight={'bold'}>
                                    How to book a hotel?
                                </Text>
                                <Text>
                                    When you're looking to book a hotel, we've got you covered. With Expedia, all you have to do is input your travel dates and your destination, and we'll show you some of the best hotels available. You can add additional search filters to sort your results even further whether you're looking for a cheap hotel room or you want to splurge on something more luxurious. You'll find Hotels in Mumbai, Hotels in Delhi and Hotels in Bangalore among countless others across the world.
                                </Text>
                            </Box>
                            <Box >
                                <Text fontWeight={'bold'}>
                                    How can I find some of the best deals on hotels?
                                </Text>
                                <Text>
                                    Hotel deals are easy to find when you use Expedia. All you have to do is implement the necessary search filters when trying to find a hotel for your next holiday. Filters are available for features like being fully refundable and having free cancellation. If you're an Expedia member, you can often find additional discounts that you wouldn't be able to enjoy otherwise. Of course, always remember to sort by price to see the cheapest suitable options that meet your criteria first on the results page.
                                </Text>
                            </Box>
                        </SimpleGrid>
                    </Center>

                    {/* Third grid  */}
                    <Center textAlign={'left'}>
                        <SimpleGrid w={'90%'} minChildWidth='190px' spacing='40px'>
                            <Box >
                                <Text fontWeight={'bold'}>
                                    What are the most important things when choosing a hotel?
                                </Text>
                                <Text>
                                    When you're choosing your hotel, it's important to consider what kind of holiday experience you're looking to enjoy. Family travellers will need to book something with plenty of room, while couples may not need something quite as large. Travelling with your partner, however, may make you more interested in amenities like hot tubs, so be sure to include the appropriate search filters based on the experience you're looking for. You'll find filters for a variety of features and amenities as well as for star ratings, reviews and proximity to certain attractions.


                                </Text>
                            </Box>
                            <Box >
                                <Text fontWeight={'bold'}>
                                    Why should I book a hotel with Expedia?

                                </Text>
                                <Text>
                                    Booking with Expedia makes planning a holiday easy. Not only will you be able to search a massive array of hotels with tools that make it easy to narrow down your options, but you can book a flight as well. You may even find additional discounts by booking your hotel and flight together. Additionally, you can become a member and enjoy extra hotel discounts you wouldn't be able to enjoy otherwise. Becoming a member is completely free, so there's no barrier to entry that comes with it.


                                </Text>
                            </Box>
                        </SimpleGrid>
                    </Center>

                    {/* Forth Grid  */}
                    <Center textAlign={'left'}>
                        <SimpleGrid w={'90%'} minChildWidth='190px' spacing='40px'>
                            <Box >
                                <Text fontWeight={'bold'}>
                                    How far in advance should I book a hotel?
                                </Text>
                                <Text>
                                    When booking a hotel, your best bet is to book a little in advance. If you book too far in advance, prices may be higher. Wait too long, however, and prices may also increase. Generally, the sweet spot is around 2 to 3 weeks before your holiday. Every destination is different, but you can start monitoring how prices change up to 40 days in advance. Keep in mind that booking at the last minute can be cheaper than you might think, thanks to hotels being desperate to get their last vacancies filled.


                                </Text>
                            </Box>
                            <Box >
                                <Text fontWeight={'bold'}>
                                    Are hotels fully refundable on Expedia?


                                </Text>
                                <Text>
                                    Some hotels on Expedia do offer flexible cancellation policies. You'll be able to see which ones do on your search results page because they'll be labelled as such in green text. Of course, you can always implement the 'fully refundable' search filter to only show results that offer this enticing feature.
                                </Text>
                            </Box>
                        </SimpleGrid>
                    </Center>
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
                                <div style={{ "overflow": "scroll" }}>
                                    <Text fontWeight={'bold'}>Domestic Flights</Text>
                                    <SimpleGrid w={'90%'} minChildWidth='190px' spacing='40px'>
                                        <Box>
                                            <Link color='blue'>Flights to Darbhanga</Link>
                                        </Box>
                                        <Box>
                                            <Link color={'blue'}>Flights to Gulbarga</Link>
                                        </Box>
                                    </SimpleGrid>
                                    <SimpleGrid w={'90%'} minChildWidth='190px' spacing='40px'>
                                        <Box>
                                            <Link color='blue'>Flights to Kannur</Link>
                                        </Box>
                                        <Box>
                                            <Link color={'blue'}>Flights to Sikkim</Link>
                                        </Box>
                                    </SimpleGrid>
                                    <SimpleGrid w={'90%'} minChildWidth='190px' spacing='40px'>
                                        <Box>
                                            <Link color='blue'>Flights to Bareilly</Link>
                                        </Box>
                                        <Box>
                                            <Link color={'blue'}>Flights to Gangtok</Link>
                                        </Box>
                                    </SimpleGrid>
                                    <SimpleGrid w={'90%'} minChildWidth='190px' spacing='40px'>
                                        <Box>
                                            <Link color='blue'>Flights to Jharsuguda</Link>
                                        </Box>
                                        <Box>
                                            <Link color={'blue'}>Flights to Kurnool</Link>
                                        </Box>
                                    </SimpleGrid>
                                    <SimpleGrid w={'90%'} minChildWidth='190px' spacing='40px'>
                                        <Box>
                                            <Link color='blue'>Flights to Ajmer</Link>
                                        </Box>
                                        <Box>
                                            <Link color={'blue'}>Flights to Malvan</Link>
                                        </Box>
                                    </SimpleGrid>

                                    {/* second  */}
                                    <Text fontWeight={'bold'}>International Flights</Text>
                                    <SimpleGrid w={'90%'} minChildWidth='190px' spacing='40px'>
                                        <Box>
                                            <Link color='blue'>Flights to Maldives</Link>
                                        </Box>
                                        <Box>
                                            <Link color={'blue'}>Flights to Singapore</Link>
                                        </Box>
                                    </SimpleGrid>
                                    <SimpleGrid w={'90%'} minChildWidth='190px' spacing='40px'>
                                        <Box>
                                            <Link color='blue'>Flights to London</Link>
                                        </Box>
                                        <Box>
                                            <Link color={'blue'}>Flights to Fiji</Link>
                                        </Box>
                                    </SimpleGrid>
                                    <SimpleGrid w={'90%'} minChildWidth='190px' spacing='40px'>
                                        <Box>
                                            <Link color='blue'>Flights to Surrey</Link>
                                        </Box>
                                        <Box>
                                            <Link color={'blue'}>Flights to Pattaya</Link>
                                        </Box>
                                    </SimpleGrid>
                                    <SimpleGrid w={'90%'} minChildWidth='190px' spacing='40px'>
                                        <Box>
                                            <Link color='blue'>Flights to New York</Link>
                                        </Box>
                                        <Box>
                                            <Link color={'blue'}>Flights to Toronto</Link>
                                        </Box>
                                    </SimpleGrid>
                                    <SimpleGrid w={'90%'} minChildWidth='190px' spacing='40px'>
                                        <Box>
                                            <Link color='blue'>Flights to Boracay Island</Link>
                                        </Box>
                                        <Box>
                                            <Link color={'blue'}>Flights to Hawaii Island</Link>
                                        </Box>
                                    </SimpleGrid>
                                </div>
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

export default Flights
