import React from 'react'
import { Box, Text, Heading, ListItem, UnorderedList, Center, Stack, Flex } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Image, Input } from "@chakra-ui/react";
import Footer from '../Components/Footer';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const List = () => {

    const [phone, setPhone] = useState('')

    const Navigate = useNavigate();

    const getPhone = () => {
        console.log(phone)
    }

    return (
        <div>

            {/* Heading */}

            <Center textAlign={'left'}>
                <Box w={'420px'}>
                    <Heading fontSize='30px' marginTop={10}>
                        My Lists has a new home
                    </Heading>
                    <br />
                    <Heading fontSize='16px'>
                        Don't worry, we saved your work.
                    </Heading>
                </Box>
            </Center>


            {/* List */}

            <Center>
                <Box marginTop={4} textAlign='left'>
                    <Text>
                        You’ll find everything you saved in Trips, where you can also:
                    </Text>
                    <UnorderedList>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Consectetur adipiscing elit</ListItem>
                        <ListItem>Integer molestie lorem at massa</ListItem>
                        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    </UnorderedList>
                    <Button onClick={() => Navigate("/trips")} marginTop={'20px'} colorScheme={'blue'}>
                        See your trips
                    </Button>
                </Box>
            </Center>

            {/* app */}

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
                                    <Input w="150px" onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone Number" />
                                    <Button
                                        onClick={getPhone}
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


            {/* Adding Footer from footer file  */}

            <Footer />


        </div >
    )
}

export default List
