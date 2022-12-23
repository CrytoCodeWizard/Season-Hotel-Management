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
        </div>
    )
}

export default Rewards
