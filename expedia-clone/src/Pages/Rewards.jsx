import { useState } from 'react'
import { Heading, Box, Center, Text } from '@chakra-ui/layout'
import { Button, Image, Input } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Footer'
import { Link } from '@chakra-ui/react'
import { Stack, Flex } from '@chakra-ui/layout'
import { useNavigate } from 'react-router'

const Rewards = () => {
    const [phone, setPhone] = useState('')

    const Navigate = useNavigate();

    const getPhone = () => {
        console.log(phone)
    }
    return (
        <div>
            <Box marginTop={10}>
                <Heading fontSize='25px'>
                    Love saving on travel? Say hello to
                </Heading>
                <Center marginTop={8}>
                    <Image src='https://a.travel-assets.com/travel-assets-manager/loyalty-rewards/B1B2-er-logo.svg' />
                </Center>
                <Center>
                    <Text marginTop={5}>
                        Get more out of your trips with Expedia Rewards. Join today to start collecting points, enjoy
                        <br />
                        Member Prices, and be on your way to unlocking membership perks.
                    </Text>
                </Center>
                <Button
                    marginTop={7}
                    colorScheme={'blue'}>
                    Join now for free
                </Button>
                <Text fontSize='13px' m='10px'>
                    Already a member? <Link color={'blue'} href='/login'>Sign in now</Link>
                </Text>
            </Box>

            {/* Box  */}
            <Center marginTop='30px' w={'100%'} p='25px' bg={'white'}>
                <Stack gap={70} direction={['column', 'row']} spacing='50px'>

                    {/* First Box  */}
                    <Box >
                        <Center>
                            <Image src='https://a.travel-assets.com/travel-assets-manager/loyalty-rewards/savings.svg' />
                        </Center>
                        <Text fontWeight={'bold'}>Earn</Text>
                        <Text>
                            Collect points on eligible bookings
                        </Text>
                        <Text>
                            and gain access to Member Prices
                        </Text>
                        <Text>
                            while logged in to your account.
                        </Text>
                    </Box>

                    {/* Second Box  */}
                    <Box >
                        <Center>
                            <Image src='https://a.travel-assets.com/travel-assets-manager/loyalty-rewards/points.svg' />
                        </Center>
                        <Text fontWeight={'bold'}>Redeem</Text>
                        <Text>
                            We’ll then convert your earned points
                        </Text>
                        <Text>
                            into savings that you can use on your
                        </Text>
                        <Text>
                            next eligible trip.
                        </Text>
                    </Box>

                    {/* Third Box  */}
                    <Box >
                        <Center >
                            <Image src='https://a.travel-assets.com/travel-assets-manager/loyalty-rewards/accelerate.svg' />
                        </Center>
                        <Text fontWeight={'bold'}>Repeat</Text>
                        <Text>
                            Keep travelling to earn more and be on
                        </Text>
                        <Text>
                            your way to higher tiers for additional
                        </Text>
                        <Text>
                            member-only perks.
                        </Text>
                    </Box>
                </Stack>
            </Center>

            {/* Posts  */}
            <Box marginTop={'45px'}>

                {/* First  */}
                <Heading fontSize={'25px'}>
                    Instantly enjoy Member Prices as soon as you join
                </Heading>
                <Text marginTop={'20px'}>
                    Expedia Rewards members can get instant access to savings worth 10% or more on select
                </Text>
                <Text>
                    hotels thanks to
                    <Link color={'blue'} href='#'> Member Prices.</Link>
                </Text>
                <Center>
                    <Image borderRadius={'15px'} h='350px' w={'45%'} marginTop={'20px'} src='https://a.travel-assets.com/travel-assets-manager/loyalty-rewards/Member-prices-img.jpg' />
                </Center>

                {/* Second  */}
                <Box marginTop={'50px'}>
                    <Heading fontSize={'25px'}>
                        How far can Expedia Rewards take you?
                    </Heading>
                    <Text>
                        With every eligible flight and hotel you book, you also collect Trip Elements. And these put
                    </Text>
                    <Text>
                        you closer and closer to the next Expedia Rewards tier.
                    </Text>
                    <Center>
                        <Image borderRadius={'15px'} h='350px' w={'45%'} marginTop={'20px'} src='https://a.travel-assets.com/travel-assets-manager/loyalty-rewards/how-far-img.jpg' />
                    </Center>
                </Box>

                <Box marginTop={'50px'}>
                    <Heading fontSize={'25px'}>
                        More Trip Elements means more perks
                    </Heading>
                    <Text>
                        Your rewards keep growing the more you travel and as you reach higher membership tiers you’ll unlock new perks. See
                    </Text>
                    <Text>
                        what’s in store at each tier level and discover all the Expedia Rewards benefits.
                    </Text>
                </Box>
            </Box>

            {/* Stack Box  */}
            <Center marginTop='30px' w={'100%'} p='25px' >
                <Stack gap={70} direction={['column', 'row']} spacing='5px'>

                    {/* First Box  */}
                    <Box textAlign={'center'} >
                        <Button colorScheme={'blue'} borderRadius='30px'>
                            Blue
                        </Button>
                        <br />
                        <Text fontWeight={'bold'}>
                            Get our best prices
                        </Text>
                        <Text marginTop={'8px'}>
                            Gain immediate access to savings: Members
                        </Text>
                        <Text>
                            save an extra 10% or more on select hotels,
                        </Text>
                        <Text>
                            plus earn points on eligible bookings, and
                        </Text>
                        <Text>
                            get double points* when booking on the app.
                        </Text>
                    </Box>

                    {/* Second Box  */}
                    <Box textAlign={'center'} >
                        <Button bg={'#D0D0D2'} borderRadius='30px' color={'black'}>
                            Silver
                        </Button>
                        <br />
                        <Text fontWeight={'bold'}>
                            Unlock extra points
                        </Text>
                        <Text marginTop={'8px'}>
                            Collect 10 Trip Elements in a year to reach
                        </Text>
                        <Text>
                            Silver. You’ll earn 2 points for every Rs 75
                        </Text>
                        <Text>
                            you spend on eligible bookings and enjoy a
                        </Text>
                        <Text>
                            perk like free breakfast or spa credits where
                        </Text>
                        <Text>
                            available at VIP Access™ properties.
                        </Text>
                    </Box>

                    {/* Third Box  */}
                    <Box textAlign={'center'} >
                        <Button bg={'orange'} borderRadius='30px' color={'black'}>
                            Gold
                        </Button>
                        <br />
                        <Text fontWeight={'bold'}>
                            Enjoy premium benefits
                        </Text>
                        <Text marginTop={'8px'}>
                            Collect 25 Trip Elements in a year to make it
                        </Text>
                        <Text>
                            to Gold. You’ll earn 3 points for every Rs 75
                        </Text>
                        <Text>
                            you spend on eligible bookings, plus late
                        </Text>
                        <Text>
                            checkout and free room upgrades when
                        </Text>
                        <Text>
                            available at VIP Access™ properties.
                        </Text>
                    </Box>
                </Stack>
            </Center>

            {/* End Box  */}

            <Box margin={'30px'}>
                <Text>
                    Start your Expedia Rewards journey today and get
                </Text>
                <Text>
                    more from your next trip
                </Text>
                <Button marginTop={'25px'} colorScheme={'blue'}>
                    Join now for free
                </Button>
                <Text fontSize='13px' m='10px'>
                    Already a member? <Link color={'blue'} href='/login'>Sign in now</Link>
                </Text>
                <Text fontSize={'11px'}>
                    *Bonus point offers are calculated on the base points earned for an eligible booking only and are not calculated on any bonus points earned for being Silver or Gold members, or otherwise.
                </Text>
                <br />
                <Link margin={'20px'} color={'blue'}>
                    Expedia Rewards FAQs
                </Link>
                <br />

                <Link color={'blue'}>
                    Expedia Rewards terms and conditions
                </Link>
            </Box>

            <Button color={'blue'} border={'1px solid blue'} bg='white'>
                Add your property to expedia
            </Button>


            {/* App  */}
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


            {/* Last  */}


            <Box >
                <Text m={'20px'} fontSize={'12px'}>
                    © 2022 Expedia, Inc., an Expedia Group company. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc.
                </Text>
            </Box>

            <Center>
                <Image src='https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg' />
            </Center>
            <Box marginTop={'20px'} w={'100%'} border='0.5px solid black'>

            </Box>
            {/* Footer  */}
            <Footer />

        </div>
    )
}

export default Rewards
