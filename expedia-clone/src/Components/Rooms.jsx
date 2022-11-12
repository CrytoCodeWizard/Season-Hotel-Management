
import { Box, Button, Divider, Grid, GridItem, HStack, Img, ListItem, OrderedList, Radio, RadioGroup, Stack, Text, UnorderedList, useDisclosure, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import RoomImgSlider from './RoomImgSlider';
import { BiArea } from "react-icons/bi"
import { MdLocationCity,MdLocalParking } from "react-icons/md"
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
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SPModal from './SPModal';


const Rooms = ({price1,price2}) => {
  const num=() => {
    const min = Math.ceil(3000);
    const max = Math.floor(10000);
    return Math.floor(Math.random() * (max - min) + min); 
};
  const price = num();
  const p1 = num();
  const p2 = num();
  const p3 = num();
  const p4 = num();
  return (
    <Box w="100%">
      <Box textAlign="initial" my="3%">
        <Text fontSize="2rem" fontWeight={500} lineHeight="1.5rem">
          Choose your room
        </Text>
      </Box>

      <Grid templateColumns="repeat(3, 32%)" gap={6}>
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
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                King, Premier Room, 1 King Bed
              </Text>
              <VStack align="initial">
                <HStack>
                  <BiArea />
                  <Text fontSize="0.8rem" fontWeight="400">
                    452 sq ft
                  </Text>
                </HStack>
                <HStack>
                  <MdLocationCity />
                  <Text fontSize="0.8rem" fontWeight="400">
                    city view
                  </Text>
                </HStack>
                <HStack>
                  <IoMdContacts />
                  <Text fontSize="0.8rem" fontWeight="400">
                    Sleeps 3
                  </Text>
                </HStack>
                <HStack>
                  <FaBed />
                  <Text fontSize="0.8rem" fontWeight="400">
                    1 King Bed
                  </Text>
                </HStack>

                <HStack>
                  <MdLocalParking />
                  <Text fontSize="0.8rem" fontWeight="400">
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
            <Box>
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                Cancellation policy
              </Text>
              <RadioGroup defaultValue="1" align="initial">
                <Radio value="1" size="sm">
                  Fully refundable before 24 Nov + ₹0
                </Radio>
                <Text
                  fontSize="0.6rem"
                  fontWeight="400"
                  lineHeight="0.5rem"
                  align="center"
                >
                  Reserve now, pay later
                </Text>
                <Radio value="2" my="0.5rem" size="sm">
                  Fully refundable before 24 Nov + ₹0
                </Radio>
              </RadioGroup>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box>
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                Extras
              </Text>
              <RadioGroup defaultValue="1" align="initial">
                <Stack>
                  <Radio value="1" size="sm">
                    No extras + ₹0
                  </Radio>

                  <Radio value="2" size="sm">
                    Breakfast + ₹500
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
            <Divider my="0.7rem" />
            <Box>
              <Text fontWeight="700" fontSize="1.5rem" align="initial">
                ₹{price1}
              </Text>
              <br />
              <HStack justifyContent="space-between">
                <Text>Price Details</Text>
                <SPModal price1={price1} />
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
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                1 King Bed
              </Text>
              <VStack align="initial">
                <HStack>
                  <BiArea />
                  <Text fontSize="0.8rem" fontWeight="400">
                    452 sq ft
                  </Text>
                </HStack>
                <HStack>
                  <MdLocationCity />
                  <Text fontSize="0.8rem" fontWeight="400">
                    city view
                  </Text>
                </HStack>
                <HStack>
                  <IoMdContacts />
                  <Text fontSize="0.8rem" fontWeight="400">
                    Sleeps 3
                  </Text>
                </HStack>
                <HStack>
                  <FaBed />
                  <Text fontSize="0.8rem" fontWeight="400">
                    1 King Bed
                  </Text>
                </HStack>

                <HStack>
                  <MdLocalParking />
                  <Text fontSize="0.8rem" fontWeight="400">
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
            <Box>
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                Cancellation policy
              </Text>
              <RadioGroup defaultValue="1" align="initial">
                <Radio value="1" size="sm">
                  Fully refundable before 24 Nov + ₹0
                </Radio>
                <Text
                  fontSize="0.6rem"
                  fontWeight="400"
                  lineHeight="0.5rem"
                  align="center"
                >
                  Reserve now, pay later
                </Text>
                <Radio value="2" my="0.5rem" size="sm">
                  Fully refundable before 24 Nov + ₹0
                </Radio>
              </RadioGroup>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box>
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                Extras
              </Text>
              <RadioGroup defaultValue="1" align="initial">
                <Stack>
                  <Radio value="1" size="sm">
                    No extras + ₹0
                  </Radio>

                  <Radio value="2" size="sm">
                    Breakfast + ₹500
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
            <Divider my="0.7rem" />
            <Box>
              <Text fontWeight="700" fontSize="1.5rem" align="initial">
                ₹{price}
              </Text>
              <br />
              <HStack justifyContent="space-between">
                <Text>Price Details</Text>
                <SPModal price1={price} />
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
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                Deluxe Room, 1 Queen Bed
              </Text>
              <VStack align="initial">
                <HStack>
                  <BiArea />
                  <Text fontSize="0.8rem" fontWeight="400">
                    452 sq ft
                  </Text>
                </HStack>
                <HStack>
                  <MdLocationCity />
                  <Text fontSize="0.8rem" fontWeight="400">
                    city view
                  </Text>
                </HStack>
                <HStack>
                  <IoMdContacts />
                  <Text fontSize="0.8rem" fontWeight="400">
                    Sleeps 3
                  </Text>
                </HStack>
                <HStack>
                  <FaBed />
                  <Text fontSize="0.8rem" fontWeight="400">
                    1 King Bed
                  </Text>
                </HStack>

                <HStack>
                  <MdLocalParking />
                  <Text fontSize="0.8rem" fontWeight="400">
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
            <Box>
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                Cancellation policy
              </Text>
              <RadioGroup defaultValue="1" align="initial">
                <Radio value="1" size="sm">
                  Fully refundable before 24 Nov + ₹0
                </Radio>
                <Text
                  fontSize="0.6rem"
                  fontWeight="400"
                  lineHeight="0.5rem"
                  align="center"
                >
                  Reserve now, pay later
                </Text>
                <Radio value="2" my="0.5rem" size="sm">
                  Fully refundable before 24 Nov + ₹0
                </Radio>
              </RadioGroup>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box>
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                Extras
              </Text>
              <RadioGroup defaultValue="1" align="initial">
                <Stack>
                  <Radio value="1" size="sm">
                    No extras + ₹0
                  </Radio>

                  <Radio value="2" size="sm">
                    Breakfast + ₹500
                  </Radio>
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
                <Text>Price Details</Text>
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
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                King, Executive Room, 1 King Bed
              </Text>
              <VStack align="initial">
                <HStack>
                  <BiArea />
                  <Text fontSize="0.8rem" fontWeight="400">
                    452 sq ft
                  </Text>
                </HStack>
                <HStack>
                  <MdLocationCity />
                  <Text fontSize="0.8rem" fontWeight="400">
                    city view
                  </Text>
                </HStack>
                <HStack>
                  <IoMdContacts />
                  <Text fontSize="0.8rem" fontWeight="400">
                    Sleeps 3
                  </Text>
                </HStack>
                <HStack>
                  <FaBed />
                  <Text fontSize="0.8rem" fontWeight="400">
                    1 King Bed
                  </Text>
                </HStack>

                <HStack>
                  <MdLocalParking />
                  <Text fontSize="0.8rem" fontWeight="400">
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
            <Box>
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                Cancellation policy
              </Text>
              <RadioGroup defaultValue="1" align="initial">
                <Radio value="1" size="sm">
                  Fully refundable before 24 Nov + ₹0
                </Radio>
                <Text
                  fontSize="0.6rem"
                  fontWeight="400"
                  lineHeight="0.5rem"
                  align="center"
                >
                  Reserve now, pay later
                </Text>
                <Radio value="2" my="0.5rem" size="sm">
                  Fully refundable before 24 Nov + ₹0
                </Radio>
              </RadioGroup>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box>
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                Extras
              </Text>
              <RadioGroup defaultValue="1" align="initial">
                <Stack>
                  <Radio value="1" size="sm">
                    No extras + ₹0
                  </Radio>

                  <Radio value="2" size="sm">
                    Breakfast + ₹500
                  </Radio>
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
                <Text>Price Details</Text>
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
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                King, Deluxe Suite, 1 Bedroom
              </Text>
              <VStack align="initial">
                <HStack>
                  <BiArea />
                  <Text fontSize="0.8rem" fontWeight="400">
                    452 sq ft
                  </Text>
                </HStack>
                <HStack>
                  <MdLocationCity />
                  <Text fontSize="0.8rem" fontWeight="400">
                    city view
                  </Text>
                </HStack>
                <HStack>
                  <IoMdContacts />
                  <Text fontSize="0.8rem" fontWeight="400">
                    Sleeps 3
                  </Text>
                </HStack>
                <HStack>
                  <FaBed />
                  <Text fontSize="0.8rem" fontWeight="400">
                    1 King Bed
                  </Text>
                </HStack>

                <HStack>
                  <MdLocalParking />
                  <Text fontSize="0.8rem" fontWeight="400">
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
            <Box>
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                Cancellation policy
              </Text>
              <RadioGroup defaultValue="1" align="initial">
                <Radio value="1" size="sm">
                  Fully refundable before 24 Nov + ₹0
                </Radio>
                <Text
                  fontSize="0.6rem"
                  fontWeight="400"
                  lineHeight="0.5rem"
                  align="center"
                >
                  Reserve now, pay later
                </Text>
                <Radio value="2" my="0.5rem" size="sm">
                  Fully refundable before 24 Nov + ₹0
                </Radio>
              </RadioGroup>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box>
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                Extras
              </Text>
              <RadioGroup defaultValue="1" align="initial">
                <Stack>
                  <Radio value="1" size="sm">
                    No extras + ₹0
                  </Radio>

                  <Radio value="2" size="sm">
                    Breakfast + ₹500
                  </Radio>
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
                <Text>Price Details</Text>
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
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                King, Premier Room, 1 King Bed
              </Text>
              <VStack align="initial">
                <HStack>
                  <BiArea />
                  <Text fontSize="0.8rem" fontWeight="400">
                    452 sq ft
                  </Text>
                </HStack>
                <HStack>
                  <MdLocationCity />
                  <Text fontSize="0.8rem" fontWeight="400">
                    city view
                  </Text>
                </HStack>
                <HStack>
                  <IoMdContacts />
                  <Text fontSize="0.8rem" fontWeight="400">
                    Sleeps 3
                  </Text>
                </HStack>
                <HStack>
                  <FaBed />
                  <Text fontSize="0.8rem" fontWeight="400">
                    1 King Bed
                  </Text>
                </HStack>

                <HStack>
                  <MdLocalParking />
                  <Text fontSize="0.8rem" fontWeight="400">
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
            <Box>
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                Cancellation policy
              </Text>
              <RadioGroup defaultValue="1" align="initial">
                <Radio value="1" size="sm">
                  Fully refundable before 24 Nov + ₹0
                </Radio>
                <Text
                  fontSize="0.6rem"
                  fontWeight="400"
                  lineHeight="0.5rem"
                  align="center"
                >
                  Reserve now, pay later
                </Text>
                <Radio value="2" my="0.5rem" size="sm">
                  Fully refundable before 24 Nov + ₹0
                </Radio>
              </RadioGroup>
            </Box>
            <Divider
              orientation="horizontal"
              colorScheme="blackAlpha"
              my="0.7rem"
            />
            <Box>
              <Text fontSize="0.9rem" fontWeight="500" align="initial">
                Extras
              </Text>
              <RadioGroup defaultValue="1" align="initial">
                <Stack>
                  <Radio value="1" size="sm">
                    No extras + ₹0
                  </Radio>

                  <Radio value="2" size="sm">
                    Breakfast + ₹500
                  </Radio>
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
                <Text>Price Details</Text>
                <SPModal price1={p4} />
              </HStack>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Rooms;
