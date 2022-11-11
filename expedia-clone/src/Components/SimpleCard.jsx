import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const SimpleCard = (props) => {
  const { src, title, city, description, rating, price, text1 } = props;
  return (
    <Box boxShadow={'md'}>
      <Center>
        <Stack w="80%" direction={["column", "row"]} spacing="24px">
          <Box padding="auto" alignItems="center" rowSpan={2} colSpan={1}>
            <Image
              boxSize={{ base: "70px", sm: "120px", md: "190px" }}
              w="100%"
              src={src}
            />
          </Box>

          <Box
            w="400px"
            paddingTop="20px"
            textAlign="left"
            marginLeft="10px"
            colSpan={2}
          >
            <Heading fontSize={{ base: "15px", sm: "20px" }}>{title}</Heading>
            <Text>{city}</Text>
            <Text>{text1}</Text>
            <Text fontSize="13px">{description}</Text>
            <Text marginTop="15px"> Rating : {rating} (500+ reviews)</Text>
          </Box>

          <Box paddingTop="40px" colSpan={2}>
            <Button fontSize="12px" p="3px" colorScheme="yellow">
              member price available
            </Button>
            <Text fontWeight="bold" fontSize="13px">
              Price: {price}
            </Text>
          </Box>
        </Stack>
      </Center>
    </Box>
  );
};

export default SimpleCard;
