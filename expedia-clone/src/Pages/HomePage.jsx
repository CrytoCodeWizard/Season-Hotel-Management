import React from 'react'

import { Heading, Image, Text, Button, Box, Input, Center, Stack } from '@chakra-ui/react'
import HomePageSlider from '../Components/HomePageSlider';


const HomePage = () => {
    return (
        <div>
            <Center>
                <Box bg={'red'}
                    w='80%'
                    h='500px'
                    backgroundImage="url('https://a.travel-assets.com/travel-assets-manager/cmct-5255/POSa-HP-Hero-D-928x398.jpg')"
                    backgroundPosition="center"
                    filter='auto' brightness='90%'
                >
                    <Box paddingTop='50px' textAlign={'left'} paddingLeft='50px' maxW='42rem'>
                        <Heading color={'white'} mb={1}>Save instantly with Expedia Rewards</Heading>
                        <br />
                        <Text color={'white'} fontSize='xl'>
                            You can enjoy access to perks like Member Prices, saving an average of 15% on thousands of hotels. Terms may apply.
                        </Text>
                        <br />
                        <Button size='lg' colorScheme='blue' mt='24px'>
                            See Member Prices
                        </Button>
                    </Box>
                </Box>
            </Center>
            <br />
            <br />
            <Center >
                <Stack w='80%' direction={['column', 'row']} spacing='24px'>
                    <Box>
                        <Image maxH={'100%'} src='https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg' alt='Dan Abramov' />
                    </Box>
                    <Box textAlign={'left'} marginLeft={'30px'}>
                        <Heading>Our app takes you further</Heading>
                        <Text>
                            When you book on the app you can save even more up to 20% on select hotels while earning double the points with every booking. With these app deals you'll save even more on trips, and that means you can take more trips, and manage it all on the go.
                        </Text>
                        <Text fontWeight={'bold'}>
                            Text yourself a download link for easy access
                        </Text>
                        <Box marginTop={'5px'}>
                            <Input maxW='100px' borderRadius='10px' value={'India 91+'} />
                            <Input maxW='200px' placeholder='Phone Number' />
                            <Button colorScheme={'blue'} marginLeft='15px'>Get the app</Button>
                        </Box>
                        <Text m={'10px'} fontSize={'14px'}>
                            By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.
                        </Text>
                    </Box>
                    <Box>
                        <Center>
                            <Image maxW={'170px'} src='https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/27_QR_FOOTER_BNA_HP.png' alt='Dan Abramov' />
                        </Center>
                    </Box>
                </Stack>
            </Center>
            <br />
            <Center>
                <Image h='100px' src='https://tpc.googlesyndication.com/simgad/4477719789317755579?' />
            </Center>
            <br />
            <HomePageSlider />
            <br />
            <Center>
                <Image w={'80%'} h='400px' src='https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg' alt='Dan Abramov' />
            </Center>
            <br />
            <br />
            <Text fontWeight='bold' >
                Explore a world of travel with Expedia
            </Text>
            <a style={{ color: "blue", }} href='/'>Discover new places and experiences</a>
            <br />
            <br />
        </div >
    )
}

export default HomePage
