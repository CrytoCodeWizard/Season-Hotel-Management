import React from "react";
import SearchBar from "../Components/SearchBar";
import Footer from "../Components/Footer";
import { Heading, Box, Center, Image, Text } from "@chakra-ui/react";
import { Stack, Flex } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { Input, Button } from "@chakra-ui/react";

const Activities = () => {
  return (
    <div>
      <Center>
        <Box textAlign={"left"} w={"80%"}>
          <Heading p={"20px"}>Search things to do</Heading>
        </Box>
      </Center>
      <SearchBar />

      <Center>
        <Box
          marginTop={"30px"}
          borderRadius={"10px"}
          m={"10px"}
          border={"1px solid black"}
          w={"80%"}
        >
          <Image
            h={"300px"}
            borderRadius={"10px"}
            w={"100%"}
            src="https://a.travel-assets.com/travel-assets-manager/8b9c5cbf-f527-49fb-b881-8d7037952a89/assurance_4_562x240-2x.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
          />
          <Box p="20px" textAlign={"left"}>
            <Text fontSize={"23px"} fontWeight="bold">
              Free cancellation on most hotels
            </Text>
            <Text>Because flexibility matters.</Text>
          </Box>
        </Box>
      </Center>
      <Center m={"20px"}>
        <Image src="https://tpc.googlesyndication.com/simgad/12535850531646588924?" />
      </Center>
      <Text
        fontSize={"25px"}
        fontWeight="bold"
        align="left"
        my="10px"
        marginLeft="10%"
      >
        Explore, discover and save
      </Text>
      <Center marginTop={"50px"}>
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
        <Box w={"80%"}>
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
                      When you book on the app you can save even more up to 20%
                      on select hotels while earning double the points with
                      every booking. With these app deals you'll save even more
                      on trips, and that means you can take more trips, and
                      manage it all on the go.
                    </Text>
                    <Heading marginBottom={5} fontSize="lg" mt="1.5rem">
                      Text yourself a download link for easy access
                    </Heading>
                    <Flex align="center" gap="0.8rem">
                      <Input
                        w="100px"
                        borderRadius="10px"
                        value={"India 91+"}
                      />
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
                      automated text message with a link to get the app.
                      Standard text message rates may apply.
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
        </Box>
      </Center>
      <Box m={"50px"}>
        <Text fontWeight={"bold"}>Explore a world of travel with Expedia</Text>
        <Link color="blue">See our travel option</Link>
      </Box>
      <hr />
      <Footer />
    </div>
  );
};

export default Activities;
