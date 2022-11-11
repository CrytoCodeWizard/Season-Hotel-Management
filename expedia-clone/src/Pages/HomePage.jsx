import React from "react";

import {
  Flex,
  Heading,
  Image,
  Text,
  Button,
  Box,
  Input,
  Center,
  Stack,
} from "@chakra-ui/react";
import HomePageSlider from "../Components/HomePageSlider";
const HomePage = () => {
  return (
    <div>
      <br />
      <Center>
        <Box
          bg={"red"}
          w="80%"
          h="500px"
          backgroundImage="url('https://a.travel-assets.com/travel-assets-manager/cmct-5255/POSa-HP-Hero-D-928x398.jpg')"
          backgroundPosition="center"
          filter="auto"
          brightness="90%"
        >
          <Box
            paddingTop="50px"
            textAlign={"left"}
            paddingLeft="50px"
            maxW="42rem"
          >
            <Heading color={"white"} mb={1}>
              Save instantly with allSeasonHOTELS Rewards
            </Heading>
            <br />
            <Text color={"white"} fontSize="xl">
              You can enjoy access to perks like Member Prices, saving an
              average of 15% on thousands of hotels. Terms may apply.
            </Text>
            <br />
            <Button size="lg" colorScheme="blue" mt="24px">
              See Member Prices
            </Button>
          </Box>
        </Box>
      </Center>
      <br />
      <br />
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
                  booking. With these app deals you'll save even more on trips,
                  and that means you can take more trips, and manage it all on
                  the go.
                </Text>
                <Heading fontSize="lg" mt="1.5rem">
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
      <br />
      <Center>
        <Image
          h="100px"
          src="https://tpc.googlesyndication.com/simgad/4477719789317755579?"
        />
      </Center>
      <br />
      <HomePageSlider />
      <br />
      <Center>
        <Image
          w={"80%"}
          h="400px"
          src="https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg"
          alt="Dan Abramov"
        />
      </Center>
      <br />
      <br />
      <Text fontWeight="bold">
        Explore a world of travel with allSeasonHOTELS
      </Text>
      <a style={{ color: "blue" }} href="/">
        Discover new places and experiences
      </a>
      <br />
      <br />
    </div>
  );
};

export default HomePage;
