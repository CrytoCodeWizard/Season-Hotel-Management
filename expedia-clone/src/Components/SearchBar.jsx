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
  Wrap,
  useToast,
} from "@chakra-ui/react";
import { BsFillGeoAltFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "../Redux/AppContext/action";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
const SearchBar = () => {
  const [adults, setAdults] = useState(1);
  const [child, setChild] = useState(0);
  const [room, setRoom] = useState(1);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [location, setLocation] = useState("");
  const initRef = useRef();
  const toast = useToast();
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
  const navigate = useNavigate();
  const handleSearch = () => {
    const payload = {
      location: location,
      rooms: room,
      adults: adults,
      child: child,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
    };
    dispatch(getHotels(payload));
    navigate("/hotels");
  };
  return (
    <div>
      <Box
        bg={"white"}
        width={"80%"}
        margin="auto"
        marginTop={"20px"}
        border={"1px solid lightgrey"}
        padding="20px"
        borderRadius="10px"
      >
        <Flex flexDirection={"column"}>
          <Box>
            <Flex
              textAlign={"center"}
              justifyContent="center"
              gap={10}
              wrap="wrap"
            >
              <Text>Stays</Text>
              <Text>Flights</Text>
              <Text>Cars</Text>
              <Text>Packages</Text>
              <Text>Things to do</Text>
            </Flex>
          </Box>
          <br />
          <Box alignItems={"center"}>
            <InputGroup
              gap={"10px"}
              display="flex"
              justifyContent={"center"}
              flexWrap={"wrap"}
            >
              <InputGroup width={"400px"}>
                <InputLeftElement
                  pointerEvents="none"
                  alignItems={"center"}
                  margin="6px 0px"
                  children={
                    <Icon w={"25px"} h={"25px"} as={BsFillGeoAltFill} />
                  }
                />
                <Input
                  bg={"white"}
                  type="text"
                  placeholder="Going to"
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
              </InputGroup>

              <Input
                bg={"white"}
                type={"date"}
                height="50px"
                width={"120px"}
                padding="0px"
                alignItems={"center"}
                fontSize={"15px"}
                borderRadius={"10px"}
                border="1px solid"
                placeholder="Check In"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              ></Input>
              <Input
                bg={"white"}
                width={"120px"}
                padding="0px"
                type={"date"}
                height="50px"
                alignItems={"center"}
                fontSize={"15px"}
                borderRadius={"10px"}
                border="1px solid"
                placeholder="Check In"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              ></Input>
              <Flex
                _focus={{ borderColor: "blue" }}
                border={"1px solid "}
                focusBorderColor="red"
                height="50px"
                width={"200px"}
                borderRadius={"10px"}
                gap={4}
                justifyContent="center"
                bg={"white"}
              >
                <Popover initialFocusRef={initRef} bg={"white"}>
                  {({ isOpen, onClose }) => (
                    <>
                      <PopoverTrigger>
                        <Box>
                          {isOpen ? "" : ""}
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
                    </>
                  )}
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
