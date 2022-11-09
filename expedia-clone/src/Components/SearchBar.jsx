import React from "react";
import {
  Box,
  Center,
  Flex,
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { BsFillGeoAltFill, BsFillPersonFill } from "react-icons/bs";
const SearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Box width={"70%"} margin="auto">
        <Flex flexDirection={"column"}>
          <Box>
            <Flex textAlign={"center"} justifyContent="center" gap={10}>
              <Text>Stays</Text>
              <Text>Flights</Text>
              <Text>Cars</Text>
              <Text>Packages</Text>
              <Text>Things to do</Text>
            </Flex>
          </Box>
          <Box alignItems={"center"}>
            <InputGroup gap={"10px"}>
              <InputLeftElement
                pointerEvents="none"
                children={
                  <Icon
                    padding={"7px"}
                    w={"25px"}
                    h={"30px"}
                    as={BsFillGeoAltFill}
                  />
                }
              />
              <Input
                type="text"
                placeholder="Going to"
                width={"30%"}
                height="40px"
                alignItems={"center"}
                fontSize={"17px"}
                textAlign={"left"}
                padding="0px 35px"
                borderRadius={"10px"}
                border="1px solid"
              />
              <Input
                type={"date"}
                height="40px"
                alignItems={"center"}
                fontSize={"17px"}
                borderRadius={"10px"}
                border="1px solid"
                placeholder="Check In"
              ></Input>
              <Input
                focusBorderColor="skyBlue"
                type={"date"}
                height="40px"
                alignItems={"center"}
                fontSize={"17px"}
                borderRadius={"10px"}
                border="1px solid"
                placeholder="Check In"
              ></Input>
              <Flex
                border={"1px solid "}
                height="40px"
                width={"20%"}
                borderRadius={"10px"}
                gap={4}
              >
                <Box alignItems={"center"}>
                  <Icon
                    as={BsFillPersonFill}
                    padding="10px 5px"
                    w="20px"
                    h="20px"
                  ></Icon>
                </Box>
                <Box>
                  <Flex height="100%" flexDirection={"column"}>
                    <Box margin={"0px"} padding="0px">
                      <Text padding={"0px"} margin={"0px"} fontSize={"15px"}>
                        Travellers
                      </Text>
                    </Box>
                    <Flex gap={4}>
                      <Text padding={"0px"} margin={"0px"}>
                        1 room
                      </Text>
                      <Text padding={"0px"} margin={"0px"}>
                        1 travellers
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </InputGroup>
          </Box>
          <Box>
            <Input type={"checkbox"}></Input>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default SearchBar;
