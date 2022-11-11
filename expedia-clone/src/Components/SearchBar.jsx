import React from "react";
import {
  Box,
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverHeader,
  Heading,
  PopoverCloseButton,
  PopoverBody,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillGeoAltFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getHotels } from "../Redux/AppContext/action";
const SearchBar = () => {
  const [adults, setAdults] = useState(1);
  const [child, setChild] = useState(0);
  const [room, setRoom] = useState(1);
  const { onClose } = useDisclosure();
  const [location, setLocation] = useState("");
  const Room = () => {
    return (
      <>
        <Flex justifyContent={"space-between"}>
          <Box>Room</Box>
          <Flex gap={2} alignItems={"center"}>
            <Button
              disabled={room === 1}
              onClick={() => setRoom(room - 1)}
              borderRadius={"50%"}
            >
              -
            </Button>
            <Text>{room}</Text>
            <Button onClick={() => setRoom(room + 1)} borderRadius={"50%"}>
              +
            </Button>
          </Flex>
        </Flex>
        <br />
        <Flex justifyContent={"space-between"}>
          <Box>Adults</Box>
          <Flex gap={2} alignItems={"center"}>
            <Button
              disabled={adults === 1}
              onClick={() => setAdults(adults - 1)}
              borderRadius={"50%"}
            >
              -
            </Button>
            <Text>{adults}</Text>
            <Button onClick={() => setAdults(adults + 1)} borderRadius={"50%"}>
              +
            </Button>
          </Flex>
        </Flex>
        <br />
        <Flex justifyContent={"space-between"}>
          <Box>Children</Box>
          <Flex gap={2} alignItems={"center"}>
            <Button
              disabled={child === 0}
              onClick={() => setChild(child - 1)}
              borderRadius={"50%"}
            >
              -
            </Button>
            <Text>{child}</Text>
            <Button onClick={() => setChild(child + 1)} borderRadius={"50%"}>
              +
            </Button>
          </Flex>
        </Flex>
      </>
    );
  };
  const dispatch = useDispatch();
  const handleSearch = () => {
    const payload = {
      location: location,
      room: room,
      adults: adults,
      child: child,
    };
    dispatch(getHotels(payload));
    setLocation("");
  };
  return (
    <div>
      <Box
        width={"70%"}
        margin="auto"
        marginTop={"20px"}
        border={"1px solid lightgrey"}
        padding="20px"
        borderRadius="10px"
      >
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
                alignItems={"center"}
                margin="6px 0px"
                children={<Icon w={"25px"} h={"25px"} as={BsFillGeoAltFill} />}
              />
              <Input
                type="text"
                placeholder="Going to"
                width={"100%"}
                height="50px"
                alignItems={"center"}
                fontSize={"17px"}
                textAlign={"left"}
                padding="0px 35px"
                borderRadius={"10px"}
                border="1px solid"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
              <Input
                type={"date"}
                height="50px"
                width={"40%"}
                padding="0px"
                alignItems={"center"}
                fontSize={"15px"}
                borderRadius={"10px"}
                border="1px solid"
                placeholder="Check In"
              ></Input>
              <Input
                width={"40%"}
                padding="0px"
                type={"date"}
                height="50px"
                alignItems={"center"}
                fontSize={"17px"}
                borderRadius={"10px"}
                border="1px solid"
                placeholder="Check In"
              ></Input>
              <Flex
                _focus={{ borderColor: "blue" }}
                border={"1px solid "}
                focusBorderColor="red"
                height="50px"
                width={"50%"}
                borderRadius={"10px"}
                gap={4}
                justifyContent="center"
              >
                <Popover>
                  <PopoverTrigger>
                    <Box>
                      <Flex height="100%" flexDirection={"column"}>
                        <Box margin={"0px"} padding="0px">
                          <Text
                            padding={"0px"}
                            margin={"0px"}
                            fontSize={"13px"}
                          >
                            Travellers
                          </Text>
                        </Box>
                        <Flex gap={4}>
                          <Text padding={"0px"} margin={"0px"}>
                            room {room}
                          </Text>
                          <Text padding={"0px"} margin={"0px"}>
                            {adults + child} travellers
                          </Text>
                        </Flex>
                      </Flex>
                    </Box>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverHeader>
                        <Heading size={"md"}>Travellers</Heading>
                      </PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Room />
                        <Flex justifyContent={"flex-end"}>
                          <Button variant={"ghost"} color="blue.500">
                            Add another room
                          </Button>
                        </Flex>
                        <br />
                        <Flex>
                          <Button
                            textAlign={"center"}
                            margin="auto"
                            bg={"blue.500"}
                            _hover={{ bg: "blue.600" }}
                            color="white"
                            width={"50%"}
                            onClick={onClose}
                          >
                            Done
                          </Button>
                        </Flex>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
              </Flex>
            </InputGroup>
          </Box>
          <br />
          <Box>
            <Button
              w={"30%"}
              fontSize="20px"
              bg={"blue.500"}
              _hover={{ bg: "blue.600" }}
              color="white"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default SearchBar;
