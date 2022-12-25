import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Img,
  ListItem,
  OrderedList,
  Radio,
  RadioGroup,
  Stack,
  Text,
  UnorderedList,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import RoomImgSlider from "./RoomImgSlider";
import { BiArea } from "react-icons/bi";
import { MdLocationCity, MdLocalParking } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SPModal from "./SPModal";

const Rooms = ({ price1 }) => {
  let price = price1;
  let p1 = price;
  let p2 = p1 + 500;
  let p3 = p1 + 5000;
  let p4 = p1 + 2700;
  let p5 = p1 + 3500;
  let p6 = p1 + 2000;

  const [charge1, setcharge1] = useState("");
  const [charge2, setcharge2] = useState("");
  const [charge3, setcharge3] = useState("");
  const [charge4, setcharge4] = useState("");
  const [charge5, setcharge5] = useState("");
  const [charge6, setcharge6] = useState("");
  p1 = p1 + Number(charge1);
  p2 = p2 + Number(charge2);
  p3 = p3 + Number(charge3);
  p4 = p4 + Number(charge4);
  p5 = p5 + Number(charge5);
  p6 = p6 + Number(charge6);

  return (
    <Box w="100%">
      <Box textAlign="initial" my="3%">
        <Text fontSize="2rem" fontWeight={500} lineHeight="1.5rem">
          Choose your room
        </Text>
      </Box>

      <Grid templateColumns="repeat(3, 32%)" gap={6} fontSize="1rem">
        <GridItem
          m="auto"
          w="100%"
          border="solid black 1px"
          borderRadius="0.7rem"
          bg="white"
        >
          <Box w="100%" h="11rem">
            <RoomImgSlider />
          </Box>
          <Box w="100%" p="0.5rem">
            <Box>
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                King, Premier Room, 1 King Bed
              </Text>
              <VStack align="initial">
                <HStack>
                  <BiArea />
                  <Text fontSize="0.9rem" fontWeight="400">
                    452 sq ft
                  </Text>
                </HStack>
                <HStack>
                  <MdLocationCity />
                  <Text fontSize="0.9rem" fontWeight="400">
                    Park view
                  </Text>
                </HStack>
                <HStack>
                  <IoMdContacts />
                  <Text fontSize="0.9rem" fontWeight="400">
                    Sleeps 2
                  </Text>
                </HStack>
                <HStack>
                  <FaBed />
                  <Text fontSize="0.9rem" fontWeight="400">
                    1 King Bed
                  </Text>
                </HStack>

                <HStack>
                  <MdLocalParking />
                  <Text fontSize="0.9rem" fontWeight="400">
                    Free parking space
                  </Text>
                </HStack>
              </VStack>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box fontSize="0.9rem">
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                Cancellation policy
              </Text>
              <RadioGroup defaultValue="0" align="initial">
                <Stack>
                  <Box display="flex">
                    <Radio value="0" size="md"></Radio>
                    <Box
                      display="flex"
                      w="80%"
                      justifyContent="space-between"
                      marginLeft="8px"
                    >
                      <Box>Fully refundable </Box>
                      <Box w="31px" fontWeight="bold">
                        + ₹0
                      </Box>
                    </Box>
                  </Box>
                </Stack>
              </RadioGroup>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box>
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                Extras
              </Text>
              <RadioGroup defaultValue="0" align="initial">
                <Stack>
                  <Box display="flex">
                    <Radio
                      value="0"
                      size="md"
                      onChange={(e) => setcharge1(e.target.value)}
                    ></Radio>
                    <Box
                      display="flex"
                      w="85%"
                      justifyContent="space-between"
                      marginLeft="8px"
                      fontSize="0.95rem"
                    >
                      <Box>No extras</Box>
                      <Box fontWeight="bold">+ ₹0</Box>
                    </Box>
                  </Box>

                  <Box display="flex">
                    <Radio
                      value="500"
                      size="md"
                      onChange={(e) => setcharge1(e.target.value)}
                    ></Radio>
                    <Box
                      display="flex"
                      w="85%"
                      justifyContent="space-between"
                      marginLeft="8px"
                      fontSize="0.95rem"
                    >
                      <Box>Breakfast</Box>
                      <Box fontWeight="bold">+ ₹500</Box>
                    </Box>
                  </Box>
                </Stack>
              </RadioGroup>
            </Box>
            <Divider my="0.7rem" />
            <Box>
              <Text fontWeight="700" fontSize="1.5rem" align="initial">
                ₹{p1}
              </Text>
              <br />
              <HStack justifyContent="space-between">
                <Text fontWeight="bold">Price Details :</Text>
                <SPModal price1={p1} />
              </HStack>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          w="100%"
          border="solid black 1px"
          borderRadius="0.7rem"
          bg="white"
        >
          <Box w="100%" h="11rem">
            <RoomImgSlider />
          </Box>
          <Box w="100%" p="0.5rem">
            <Box>
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                1 King Bed
              </Text>
              <VStack align="initial">
                <HStack>
                  <BiArea />
                  <Text fontSize="0.9rem" fontWeight="400">
                    475 sq ft
                  </Text>
                </HStack>
                <HStack>
                  <MdLocationCity />
                  <Text fontSize="0.9rem" fontWeight="400">
                    city view
                  </Text>
                </HStack>
                <HStack>
                  <IoMdContacts />
                  <Text fontSize="0.9rem" fontWeight="400">
                    Sleeps 3
                  </Text>
                </HStack>
                <HStack>
                  <FaBed />
                  <Text fontSize="0.9rem" fontWeight="400">
                    1 King Bed
                  </Text>
                </HStack>

                <HStack>
                  <MdLocalParking />
                  <Text fontSize="0.9rem" fontWeight="400">
                    Free parking space
                  </Text>
                </HStack>
              </VStack>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box fontSize="0.9rem">
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                Cancellation policy
              </Text>
              <RadioGroup defaultValue="0" align="initial">
                <Stack>
                  <Box display="flex">
                    <Radio value="0" size="md"></Radio>
                    <Box
                      display="flex"
                      w="80%"
                      justifyContent="space-between"
                      marginLeft="8px"
                    >
                      <Box>Fully refundable </Box>
                      <Box w="31px" fontWeight="bold">
                        + ₹0
                      </Box>
                    </Box>
                  </Box>
                </Stack>
              </RadioGroup>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box>
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                Extras
              </Text>
              <RadioGroup defaultValue="0" align="initial">
                <Stack>
                  <Box display="flex">
                    <Radio
                      value="0"
                      size="md"
                      onChange={(e) => setcharge2(e.target.value)}
                    ></Radio>
                    <Box
                      display="flex"
                      w="85%"
                      justifyContent="space-between"
                      marginLeft="8px"
                      fontSize="0.95rem"
                    >
                      <Box>No extras</Box>
                      <Box fontWeight="bold">+ ₹0</Box>
                    </Box>
                  </Box>

                  <Box display="flex">
                    <Radio
                      value="500"
                      size="md"
                      onChange={(e) => setcharge2(e.target.value)}
                    ></Radio>
                    <Box
                      display="flex"
                      w="85%"
                      justifyContent="space-between"
                      marginLeft="8px"
                      fontSize="0.95rem"
                    >
                      <Box>Breakfast</Box>
                      <Box fontWeight="bold">+ ₹500</Box>
                    </Box>
                  </Box>
                </Stack>
              </RadioGroup>
            </Box>
            <Divider my="0.7rem" />
            <Box>
              <Text fontWeight="700" fontSize="1.5rem" align="initial">
                ₹{p2}
              </Text>
              <br />
              <HStack justifyContent="space-between">
                <Text fontWeight="bold">Price Details :</Text>
                <SPModal price1={p2} />
              </HStack>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          w="100%"
          border="solid black 1px"
          borderRadius="0.7rem"
          bg="white"
        >
          <Box w="100%" h="11rem">
            <RoomImgSlider />
          </Box>
          <Box w="100%" p="0.5rem">
            <Box>
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                Deluxe Room, 1 Queen Bed
              </Text>
              <VStack align="initial">
                <HStack>
                  <BiArea />
                  <Text fontSize="0.9rem" fontWeight="400">
                    452 sq ft
                  </Text>
                </HStack>
                <HStack>
                  <MdLocationCity />
                  <Text fontSize="0.9rem" fontWeight="400">
                    city view
                  </Text>
                </HStack>
                <HStack>
                  <IoMdContacts />
                  <Text fontSize="0.9rem" fontWeight="400">
                    Sleeps 3
                  </Text>
                </HStack>
                <HStack>
                  <FaBed />
                  <Text fontSize="0.9rem" fontWeight="400">
                    1 Queen Bed
                  </Text>
                </HStack>

                <HStack>
                  <MdLocalParking />
                  <Text fontSize="0.9rem" fontWeight="400">
                    Free parking space
                  </Text>
                </HStack>
              </VStack>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box fontSize="0.9rem">
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                Cancellation policy
              </Text>
              <RadioGroup defaultValue="0" align="initial">
                <Stack>
                  <Box display="flex">
                    <Radio value="0" size="md"></Radio>
                    <Box
                      display="flex"
                      w="80%"
                      justifyContent="space-between"
                      marginLeft="8px"
                    >
                      <Box>Fully refundable </Box>
                      <Box w="31px" fontWeight="bold">
                        + ₹0
                      </Box>
                    </Box>
                  </Box>
                </Stack>
              </RadioGroup>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box>
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                Extras
              </Text>
              <RadioGroup defaultValue="0" align="initial">
                <Stack>
                  <Box display="flex">
                    <Radio
                      value="0"
                      size="md"
                      onChange={(e) => setcharge3(e.target.value)}
                    ></Radio>
                    <Box
                      display="flex"
                      w="85%"
                      justifyContent="space-between"
                      marginLeft="8px"
                      fontSize="0.95rem"
                    >
                      <Box>No extras</Box>
                      <Box fontWeight="bold">+ ₹0</Box>
                    </Box>
                  </Box>

                  <Box display="flex">
                    <Radio
                      value="550"
                      size="md"
                      onChange={(e) => setcharge3(e.target.value)}
                    ></Radio>
                    <Box
                      display="flex"
                      w="85%"
                      justifyContent="space-between"
                      marginLeft="8px"
                      fontSize="0.95rem"
                    >
                      <Box>Breakfast</Box>
                      <Box fontWeight="bold">+ ₹550</Box>
                    </Box>
                  </Box>
                </Stack>
              </RadioGroup>
            </Box>
            <Divider my="0.7rem" />
            <Box>
              <Text fontWeight="700" fontSize="1.5rem" align="initial">
                ₹{p3}
              </Text>
              <br />
              <HStack justifyContent="space-between">
                <Text fontWeight="bold">Price Details :</Text>
                <SPModal price1={p3} />
              </HStack>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          w="100%"
          border="solid black 1px"
          borderRadius="0.7rem"
          bg="white"
        >
          <Box w="100%" h="11rem">
            <RoomImgSlider />
          </Box>
          <Box w="100%" p="0.5rem">
            <Box>
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                King, Executive Room, 1 King Bed
              </Text>
              <VStack align="initial">
                <HStack>
                  <BiArea />
                  <Text fontSize="0.9rem" fontWeight="400">
                    572 sq ft
                  </Text>
                </HStack>
                <HStack>
                  <MdLocationCity />
                  <Text fontSize="0.9rem" fontWeight="400">
                    Ocean view
                  </Text>
                </HStack>
                <HStack>
                  <IoMdContacts />
                  <Text fontSize="0.9rem" fontWeight="400">
                    Sleeps 2
                  </Text>
                </HStack>
                <HStack>
                  <FaBed />
                  <Text fontSize="0.9rem" fontWeight="400">
                    1 King Bed
                  </Text>
                </HStack>

                <HStack>
                  <MdLocalParking />
                  <Text fontSize="0.9rem" fontWeight="400">
                    Free parking space
                  </Text>
                </HStack>
              </VStack>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box fontSize="0.9rem">
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                Cancellation policy
              </Text>
              <RadioGroup defaultValue="0" align="initial">
                <Stack>
                  <Box display="flex">
                    <Radio value="0" size="md"></Radio>
                    <Box
                      display="flex"
                      w="80%"
                      justifyContent="space-between"
                      marginLeft="8px"
                    >
                      <Box>Fully refundable </Box>
                      <Box w="31px" fontWeight="bold">
                        + ₹0
                      </Box>
                    </Box>
                  </Box>
                </Stack>
              </RadioGroup>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box>
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                Extras
              </Text>
              <RadioGroup defaultValue="0" align="initial">
                <Stack>
                  <Box display="flex">
                    <Radio
                      value="0"
                      size="md"
                      onChange={(e) => setcharge4(e.target.value)}
                    ></Radio>
                    <Box
                      display="flex"
                      w="85%"
                      justifyContent="space-between"
                      marginLeft="8px"
                      fontSize="0.95rem"
                    >
                      <Box>No extras</Box>
                      <Box fontWeight="bold">+ ₹0</Box>
                    </Box>
                  </Box>

                  <Box display="flex">
                    <Radio
                      value="600"
                      size="md"
                      onChange={(e) => setcharge4(e.target.value)}
                    ></Radio>
                    <Box
                      display="flex"
                      w="85%"
                      justifyContent="space-between"
                      marginLeft="8px"
                      fontSize="0.95rem"
                    >
                      <Box>Breakfast</Box>
                      <Box fontWeight="bold">+ ₹600</Box>
                    </Box>
                  </Box>
                </Stack>
              </RadioGroup>
            </Box>
            <Divider my="0.7rem" />
            <Box>
              <Text fontWeight="700" fontSize="1.5rem" align="initial">
                ₹{p4}
              </Text>
              <br />
              <HStack justifyContent="space-between">
                <Text fontWeight="bold">Price Details :</Text>
                <SPModal price1={p4} />
              </HStack>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          w="100%"
          border="solid black 1px"
          borderRadius="0.7rem"
          bg="white"
        >
          <Box w="100%" h="11rem">
            <RoomImgSlider />
          </Box>
          <Box w="100%" p="0.5rem">
            <Box>
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                King, Deluxe Suite, 1 Bedroom
              </Text>
              <VStack align="initial">
                <HStack>
                  <BiArea />
                  <Text fontSize="0.9rem" fontWeight="400">
                    520 sq ft
                  </Text>
                </HStack>
                <HStack>
                  <MdLocationCity />
                  <Text fontSize="0.9rem" fontWeight="400">
                    city view
                  </Text>
                </HStack>
                <HStack>
                  <IoMdContacts />
                  <Text fontSize="0.9rem" fontWeight="400">
                    Sleeps 3
                  </Text>
                </HStack>
                <HStack>
                  <FaBed />
                  <Text fontSize="0.9rem" fontWeight="400">
                    1 King Bed
                  </Text>
                </HStack>

                <HStack>
                  <MdLocalParking />
                  <Text fontSize="0.9rem" fontWeight="400">
                    Free parking space
                  </Text>
                </HStack>
              </VStack>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box fontSize="0.9rem">
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                Cancellation policy
              </Text>
              <RadioGroup defaultValue="0" align="initial">
                <Stack>
                  <Box display="flex">
                    <Radio value="0" size="md"></Radio>
                    <Box
                      display="flex"
                      w="80%"
                      justifyContent="space-between"
                      marginLeft="8px"
                    >
                      <Box>Fully refundable </Box>
                      <Box w="31px" fontWeight="bold">
                        + ₹0
                      </Box>
                    </Box>
                  </Box>
                </Stack>
              </RadioGroup>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box>
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                Extras
              </Text>
              <RadioGroup defaultValue="0" align="initial">
                <Stack>
                  <Box display="flex">
                    <Radio
                      value="0"
                      size="md"
                      onChange={(e) => setcharge5(e.target.value)}
                    ></Radio>
                    <Box
                      display="flex"
                      w="85%"
                      justifyContent="space-between"
                      marginLeft="8px"
                      fontSize="0.95rem"
                    >
                      <Box>No extras</Box>
                      <Box fontWeight="bold">+ ₹0</Box>
                    </Box>
                  </Box>

                  <Box display="flex">
                    <Radio
                      value="500"
                      size="md"
                      onChange={(e) => setcharge5(e.target.value)}
                    ></Radio>
                    <Box
                      display="flex"
                      w="85%"
                      justifyContent="space-between"
                      marginLeft="8px"
                      fontSize="0.95rem"
                    >
                      <Box>Breakfast</Box>
                      <Box fontWeight="bold">+ ₹500</Box>
                    </Box>
                  </Box>
                </Stack>
              </RadioGroup>
            </Box>
            <Divider my="0.7rem" />
            <Box>
              <Text fontWeight="700" fontSize="1.5rem" align="initial">
                ₹{p5}
              </Text>
              <br />
              <HStack justifyContent="space-between">
                <Text fontWeight="bold">Price Details :</Text>
                <SPModal price1={p5} />
              </HStack>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          w="100%"
          border="solid black 1px"
          borderRadius="0.7rem"
          bg="white"
        >
          <Box w="100%" h="11rem">
            <RoomImgSlider />
          </Box>
          <Box w="100%" p="0.5rem">
            <Box>
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                King, Premier Room, 1 King Bed
              </Text>
              <VStack align="initial">
                <HStack>
                  <BiArea />
                  <Text fontSize="0.9rem" fontWeight="400">
                    452 sq ft
                  </Text>
                </HStack>
                <HStack>
                  <MdLocationCity />
                  <Text fontSize="0.9rem" fontWeight="400">
                    Garden view
                  </Text>
                </HStack>
                <HStack>
                  <IoMdContacts />
                  <Text fontSize="0.9rem" fontWeight="400">
                    Sleeps 3
                  </Text>
                </HStack>
                <HStack>
                  <FaBed />
                  <Text fontSize="0.9rem" fontWeight="400">
                    1 King Bed
                  </Text>
                </HStack>

                <HStack>
                  <MdLocalParking />
                  <Text fontSize="0.9rem" fontWeight="400">
                    Free parking space
                  </Text>
                </HStack>
              </VStack>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box fontSize="0.9rem">
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                Cancellation policy
              </Text>
              <RadioGroup defaultValue="0" align="initial">
                <Stack>
                  <Box display="flex">
                    <Radio value="0" size="md"></Radio>
                    <Box
                      display="flex"
                      w="80%"
                      justifyContent="space-between"
                      marginLeft="8px"
                    >
                      <Box>Fully refundable </Box>
                      <Box w="31px" fontWeight="bold">
                        + ₹0
                      </Box>
                    </Box>
                  </Box>
                </Stack>
              </RadioGroup>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box>
              <Text fontSize="0.95rem" fontWeight="500" align="initial">
                Extras
              </Text>
              <RadioGroup defaultValue="0" align="initial">
                <Stack>
                  <Box display="flex">
                    <Radio
                      value="0"
                      size="md"
                      onChange={(e) => setcharge6(e.target.value)}
                    ></Radio>
                    <Box
                      display="flex"
                      w="85%"
                      justifyContent="space-between"
                      marginLeft="8px"
                      fontSize="0.95rem"
                    >
                      <Box>No extras</Box>
                      <Box fontWeight="bold">+ ₹0</Box>
                    </Box>
                  </Box>

                  <Box display="flex">
                    <Radio
                      value="800"
                      size="md"
                      onChange={(e) => setcharge6(e.target.value)}
                    ></Radio>
                    <Box
                      display="flex"
                      w="85%"
                      justifyContent="space-between"
                      marginLeft="8px"
                      fontSize="0.95rem"
                    >
                      <Box>Breakfast</Box>
                      <Box fontWeight="bold">+ ₹800</Box>
                    </Box>
                  </Box>
                </Stack>
              </RadioGroup>
            </Box>
            <Divider my="0.7rem" />
            <Box>
              <Text fontWeight="700" fontSize="1.5rem" align="initial">
                ₹{p6}
              </Text>
              <br />
              <HStack justifyContent="space-between">
                <Text fontWeight="bold">Price Details :</Text>
                <SPModal price1={p6} />
              </HStack>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Rooms;
