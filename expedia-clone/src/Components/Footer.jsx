import {
  Container,
  Box,
  Image,
  Center,
  Text,
  Stack,
  Heading,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Logo from "../Images/ProjectLogo.jpeg";

function Footer() {
  const hoverColor = "#3182ce";

  const MenuItem = ({ name }) => {
    return (
      <Text fontSize="xs" textAlign={"left"} _hover={{ color: hoverColor }}>
        {name}
      </Text>
    );
  };
  return (
    <Container maxW="container.xl">
      <Box mt="50" mb="50" p="1">
        <Flex flexWrap="wrap">
          <Box>
            <Image
              w="80px"
              h="80px"
              borderRadius="50%"
              src={Logo}
              alt="allSeasonHOTELS"
            />
          </Box>
          <Spacer />
          <Box mb="50">
            <Stack spacing={3}>
              <Heading as="h6" size="xs" textAlign={"left"}>
                Company
              </Heading>
              <MenuItem name={"About us"} />
              <MenuItem name={"Jobs"} />
              <MenuItem name={"List your property"} />
              <MenuItem name={"Partnerships"} />
            </Stack>
          </Box>
          <Spacer />
          <Box mb="50">
            <Stack spacing={3}>
              <Heading as="h6" size="xs" textAlign={"left"}>
                Explore
              </Heading>
              <MenuItem name={"India travel guide"} />
              <MenuItem name={"Hotels in India"} />
              <MenuItem name={"Holiday rentals in India"} />
              <MenuItem name={" Holiday packages in India"} />
              <MenuItem name={"Domestic flights"} />
              <MenuItem name={"Car hire in India"} />
              <MenuItem name={"All accommodation types"} />
              <MenuItem name={"Travel blog"} />
            </Stack>
          </Box>
          <Spacer />
          <Box mb="50">
            <Stack spacing={3}>
              <Heading as="h6" size="xs" textAlign={"left"}>
                Terms and policies
              </Heading>
              <MenuItem name={"Privacy Statement"} />
              <MenuItem name={"Terms of use"} />
              <MenuItem name={" Vrbo terms and conditions"} />
            </Stack>
          </Box>
          <Spacer />
          <Box mb="50">
            <Stack spacing={3}>
              <Heading as="h6" size="xs" textAlign={"left"}>
                Help
              </Heading>
              <MenuItem name={"Support"} />
              <MenuItem name={"Change or cancel your booking"} />
              <MenuItem name={"Refund process and timelines"} />
              <MenuItem name={" Book a flight using an airline credit"} />
              <MenuItem name={" International travel documents"} />
            </Stack>
          </Box>
        </Flex>
      </Box>
      <Container
        maxW="container.xl"
        mt="-60px"
        borderTop="1px"
        borderTopColor="#c5c7cc"
      >
        <Box p="5">
          <Center>
            <Image
              w="200px"
              src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png"
            />
          </Center>
          <Text fontSize="xs">
            © 2022 allSeasonHOTELS, Inc., an allSeasonHOTELS Group company, All
            rights reserved. allSeasonHOTELS and the Logo are trademarks or
            registered trademarks of allSeasonHOTELS, Inc.
          </Text>
        </Box>
      </Container>
    </Container>
  );
}

export default Footer;
