import React from "react";
import SearchBar from "../Components/SearchBar";
import Footer from "../Components/Footer";
import { Heading, Box, Center, Image, Text } from "@chakra-ui/react";
import { Stack, Flex, Divider, SimpleGrid } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { Input, Button } from "@chakra-ui/react";

const Deals = () => {
  return (
    <div>
      <Center>
        <Box textAlign={"left"} w={"80%"}>
          <Heading p={"20px"} fontSize="40px">
            Holiday Deals + Trip ideas
          </Heading>
          <Text marginLeft="1%">
            Recommendations and savings to inspire your next holiday
          </Text>
          <Text my="2%" marginLeft="1%" fontSize="20px" fontWeight="bold">
            Already have a destination in mind?
          </Text>
        </Box>
      </Center>
      <SearchBar />

      <Text
        fontSize={"25px"}
        fontWeight="bold"
        align="left"
        my="10px"
        marginLeft="10%"
      >
        Explore more travel deals
      </Text>
      <Divider />
      <SimpleGrid columns={2} spacing={10} marginTop="1%" color="blue">
        <Box  textAlign="center">
          Hotel Deals
        </Box>
        <Box  textAlign="center">
          Travel Deals
        </Box>
        <Box  textAlign="center">
          Last Minute deals
        </Box>
        <Box  textAlign="center">
          Hotels with free cancellation
        </Box>
      </SimpleGrid>

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

export default Deals;
