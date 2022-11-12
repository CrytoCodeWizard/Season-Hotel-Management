
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


const Rooms = ({price1,price2}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
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
              <RadioGroup
                defaultValue="1"
                align="initial"
              >
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
                <Button
                  bg="#3662D8"
                  color="white"
                  _hover={{ bg: "#31087B" }}
                  onClick={onOpen}
                >
                  Reserve
                </Button>
              </HStack>
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
                size="xl"
              >
                <ModalOverlay />
                <ModalContent >
                  <ModalCloseButton />
                  <ModalHeader>Your payment options</ModalHeader>

                  <ModalBody>
                    <HStack
                      h="4rem"
                      my="0.5rem"
                      lineHeight="1.1rem"
                      fontSize="0.9rem"
                    >
                      <Box>
                        <Img src="https://a.travel-assets.com/travel-assets-manager/03052020/illustration__free__cancellation__sml.svg" />
                      </Box>
                      <Box>
                        <Text fontWeight="500">
                          Fully refundable before Thu, 24 Nov
                        </Text>
                        <Text>
                          You can change or cancel this stay if plans change.
                          Because flexibility matters.
                        </Text>
                      </Box>
                    </HStack>
                    <HStack my="0.5rem">
                      <Box w="60%">
                        <Text fontWeight="500">Pay Now</Text>
                        <UnorderedList fontSize="0.9rem">
                          <ListItem>
                            We will process your payment in your local currency
                          </ListItem>
                          <ListItem>
                            You can use a valid Expedia coupon
                          </ListItem>
                          <ListItem>
                            Please note that Expedia will not issue a tax
                            invoice. You will receive a commercial receipt for
                            the purpose of the transaction
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box w="20%"></Box>
                      <Box alignItems="flex-end" w="20%">
                        <Text fontWeight="700" fontSize="1.5rem" align="end">
                          ₹{price1}
                        </Text>
                        <Button
                          bg="#3662D8"
                          color="white"
                          _hover={{ bg: "#31087B" }}
                          my="1rem"
                          align="end"
                        >
                          Pay Now
                        </Button>
                      </Box>
                    </HStack>
                    <HStack>
                      <Box w="60%">
                        <Text fontWeight="500">Pay when you stay</Text>
                        <UnorderedList fontSize="0.9rem">
                          <ListItem>
                            You will not be charged until your stay
                          </ListItem>
                          <ListItem>
                            Pay the property directly in their local currency
                          </ListItem>
                          <ListItem>
                            Please note that Expedia will not issue a tax
                            invoice. You will receive a commercial receipt for
                            the purpose of the transaction. Upon request, a tax
                            invoice would be issued by the property
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box w="15%"></Box>
                      <Box alignItems="flex-end" w="25%">
                        <Text fontWeight="700" fontSize="1.5rem" align="end">
                          ₹{price1}
                        </Text>
                        <Button
                          bg="#3662D8"
                          color="white"
                          _hover={{ bg: "#31087B" }}
                          my="1rem"
                        >
                          Pay at Property
                        </Button>
                      </Box>
                    </HStack>
                  </ModalBody>
                </ModalContent>
              </Modal>
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
                {" "}
                ₹20000
              </Text>
              <br />
              <HStack justifyContent="space-around">
                <Text>Price Details</Text>
                <Button
                  bg="#3662D8"
                  color="white"
                  _hover={{ bg: "#31087B" }}
                  onClick={onOpen}
                >
                  Reserve
                </Button>
              </HStack>
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
                size="xl"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton />
                  <ModalHeader>Your payment options</ModalHeader>

                  <ModalBody>
                    <HStack
                      h="4rem"
                      my="0.5rem"
                      lineHeight="1.1rem"
                      fontSize="0.9rem"
                    >
                      <Box>
                        <Img src="https://a.travel-assets.com/travel-assets-manager/03052020/illustration__free__cancellation__sml.svg" />
                      </Box>
                      <Box>
                        <Text fontWeight="500">
                          Fully refundable before Thu, 24 Nov
                        </Text>
                        <Text>
                          You can change or cancel this stay if plans change.
                          Because flexibility matters.
                        </Text>
                      </Box>
                    </HStack>
                    <HStack my="0.5rem">
                      <Box w="60%">
                        <Text fontWeight="500">Pay Now</Text>
                        <UnorderedList fontSize="0.9rem">
                          <ListItem>
                            We will process your payment in your local currency
                          </ListItem>
                          <ListItem>
                            You can use a valid Expedia coupon
                          </ListItem>
                          <ListItem>
                            Please note that Expedia will not issue a tax
                            invoice. You will receive a commercial receipt for
                            the purpose of the transaction
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box w="20%"></Box>
                      <Box alignItems="flex-end" w="20%">
                        <Text fontWeight="700" fontSize="1.5rem" align="end">
                          {" "}
                          ₹20000
                        </Text>
                        <Button
                          bg="#3662D8"
                          color="white"
                          _hover={{ bg: "#31087B" }}
                          my="1rem"
                          align="end"
                        >
                          Pay Now
                        </Button>
                      </Box>
                    </HStack>
                    <HStack>
                      <Box w="60%">
                        <Text fontWeight="500">Pay when you stay</Text>
                        <UnorderedList fontSize="0.9rem">
                          <ListItem>
                            You will not be charged until your stay
                          </ListItem>
                          <ListItem>
                            Pay the property directly in their local currency
                          </ListItem>
                          <ListItem>
                            Please note that Expedia will not issue a tax
                            invoice. You will receive a commercial receipt for
                            the purpose of the transaction. Upon request, a tax
                            invoice would be issued by the property
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box w="15%"></Box>
                      <Box alignItems="flex-end" w="25%">
                        <Text fontWeight="700" fontSize="1.5rem" align="end">
                          {" "}
                          ₹20000
                        </Text>
                        <Button
                          bg="#3662D8"
                          color="white"
                          _hover={{ bg: "#31087B" }}
                          my="1rem"
                        >
                          Pay at Property
                        </Button>
                      </Box>
                    </HStack>
                  </ModalBody>
                </ModalContent>
              </Modal>
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
                {" "}
                ₹20000
              </Text>
              <br />
              <HStack justifyContent="space-around">
                <Text>Price Details</Text>
                <Button
                  bg="#3662D8"
                  color="white"
                  _hover={{ bg: "#31087B" }}
                  onClick={onOpen}
                >
                  Reserve
                </Button>
              </HStack>
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
                size="xl"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton />
                  <ModalHeader>Your payment options</ModalHeader>

                  <ModalBody>
                    <HStack
                      h="4rem"
                      my="0.5rem"
                      lineHeight="1.1rem"
                      fontSize="0.9rem"
                    >
                      <Box>
                        <Img src="https://a.travel-assets.com/travel-assets-manager/03052020/illustration__free__cancellation__sml.svg" />
                      </Box>
                      <Box>
                        <Text fontWeight="500">
                          Fully refundable before Thu, 24 Nov
                        </Text>
                        <Text>
                          You can change or cancel this stay if plans change.
                          Because flexibility matters.
                        </Text>
                      </Box>
                    </HStack>
                    <HStack my="0.5rem">
                      <Box w="60%">
                        <Text fontWeight="500">Pay Now</Text>
                        <UnorderedList fontSize="0.9rem">
                          <ListItem>
                            We will process your payment in your local currency
                          </ListItem>
                          <ListItem>
                            You can use a valid Expedia coupon
                          </ListItem>
                          <ListItem>
                            Please note that Expedia will not issue a tax
                            invoice. You will receive a commercial receipt for
                            the purpose of the transaction
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box w="20%"></Box>
                      <Box alignItems="flex-end" w="20%">
                        <Text fontWeight="700" fontSize="1.5rem" align="end">
                          {" "}
                          ₹20000
                        </Text>
                        <Button
                          bg="#3662D8"
                          color="white"
                          _hover={{ bg: "#31087B" }}
                          my="1rem"
                          align="end"
                        >
                          Pay Now
                        </Button>
                      </Box>
                    </HStack>
                    <HStack>
                      <Box w="60%">
                        <Text fontWeight="500">Pay when you stay</Text>
                        <UnorderedList fontSize="0.9rem">
                          <ListItem>
                            You will not be charged until your stay
                          </ListItem>
                          <ListItem>
                            Pay the property directly in their local currency
                          </ListItem>
                          <ListItem>
                            Please note that Expedia will not issue a tax
                            invoice. You will receive a commercial receipt for
                            the purpose of the transaction. Upon request, a tax
                            invoice would be issued by the property
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box w="15%"></Box>
                      <Box alignItems="flex-end" w="25%">
                        <Text fontWeight="700" fontSize="1.5rem" align="end">
                          {" "}
                          ₹20000
                        </Text>
                        <Button
                          bg="#3662D8"
                          color="white"
                          _hover={{ bg: "#31087B" }}
                          my="1rem"
                        >
                          Pay at Property
                        </Button>
                      </Box>
                    </HStack>
                  </ModalBody>
                </ModalContent>
              </Modal>
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
                {" "}
                ₹20000
              </Text>
              <br />
              <HStack justifyContent="space-around">
                <Text>Price Details</Text>
                <Button
                  bg="#3662D8"
                  color="white"
                  _hover={{ bg: "#31087B" }}
                  onClick={onOpen}
                >
                  Reserve
                </Button>
              </HStack>
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
                size="xl"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton />
                  <ModalHeader>Your payment options</ModalHeader>

                  <ModalBody>
                    <HStack
                      h="4rem"
                      my="0.5rem"
                      lineHeight="1.1rem"
                      fontSize="0.9rem"
                    >
                      <Box>
                        <Img src="https://a.travel-assets.com/travel-assets-manager/03052020/illustration__free__cancellation__sml.svg" />
                      </Box>
                      <Box>
                        <Text fontWeight="500">
                          Fully refundable before Thu, 24 Nov
                        </Text>
                        <Text>
                          You can change or cancel this stay if plans change.
                          Because flexibility matters.
                        </Text>
                      </Box>
                    </HStack>
                    <HStack my="0.5rem">
                      <Box w="60%">
                        <Text fontWeight="500">Pay Now</Text>
                        <UnorderedList fontSize="0.9rem">
                          <ListItem>
                            We will process your payment in your local currency
                          </ListItem>
                          <ListItem>
                            You can use a valid Expedia coupon
                          </ListItem>
                          <ListItem>
                            Please note that Expedia will not issue a tax
                            invoice. You will receive a commercial receipt for
                            the purpose of the transaction
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box w="20%"></Box>
                      <Box alignItems="flex-end" w="20%">
                        <Text fontWeight="700" fontSize="1.5rem" align="end">
                          {" "}
                          ₹20000
                        </Text>
                        <Button
                          bg="#3662D8"
                          color="white"
                          _hover={{ bg: "#31087B" }}
                          my="1rem"
                          align="end"
                        >
                          Pay Now
                        </Button>
                      </Box>
                    </HStack>
                    <HStack>
                      <Box w="60%">
                        <Text fontWeight="500">Pay when you stay</Text>
                        <UnorderedList fontSize="0.9rem">
                          <ListItem>
                            You will not be charged until your stay
                          </ListItem>
                          <ListItem>
                            Pay the property directly in their local currency
                          </ListItem>
                          <ListItem>
                            Please note that Expedia will not issue a tax
                            invoice. You will receive a commercial receipt for
                            the purpose of the transaction. Upon request, a tax
                            invoice would be issued by the property
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box w="15%"></Box>
                      <Box alignItems="flex-end" w="25%">
                        <Text fontWeight="700" fontSize="1.5rem" align="end">
                          {" "}
                          ₹20000
                        </Text>
                        <Button
                          bg="#3662D8"
                          color="white"
                          _hover={{ bg: "#31087B" }}
                          my="1rem"
                        >
                          Pay at Property
                        </Button>
                      </Box>
                    </HStack>
                  </ModalBody>
                </ModalContent>
              </Modal>
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
                {" "}
                ₹20000
              </Text>
              <br />
              <HStack justifyContent="space-around">
                <Text>Price Details</Text>
                <Button
                  bg="#3662D8"
                  color="white"
                  _hover={{ bg: "#31087B" }}
                  onClick={onOpen}
                >
                  Reserve
                </Button>
              </HStack>
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
                size="xl"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton />
                  <ModalHeader>Your payment options</ModalHeader>

                  <ModalBody>
                    <HStack
                      h="4rem"
                      my="0.5rem"
                      lineHeight="1.1rem"
                      fontSize="0.9rem"
                    >
                      <Box>
                        <Img src="https://a.travel-assets.com/travel-assets-manager/03052020/illustration__free__cancellation__sml.svg" />
                      </Box>
                      <Box>
                        <Text fontWeight="500">
                          Fully refundable before Thu, 24 Nov
                        </Text>
                        <Text>
                          You can change or cancel this stay if plans change.
                          Because flexibility matters.
                        </Text>
                      </Box>
                    </HStack>
                    <HStack my="0.5rem">
                      <Box w="60%">
                        <Text fontWeight="500">Pay Now</Text>
                        <UnorderedList fontSize="0.9rem">
                          <ListItem>
                            We will process your payment in your local currency
                          </ListItem>
                          <ListItem>
                            You can use a valid Expedia coupon
                          </ListItem>
                          <ListItem>
                            Please note that Expedia will not issue a tax
                            invoice. You will receive a commercial receipt for
                            the purpose of the transaction
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box w="20%"></Box>
                      <Box alignItems="flex-end" w="20%">
                        <Text fontWeight="700" fontSize="1.5rem" align="end">
                          {" "}
                          ₹20000
                        </Text>
                        <Button
                          bg="#3662D8"
                          color="white"
                          _hover={{ bg: "#31087B" }}
                          my="1rem"
                          align="end"
                        >
                          Pay Now
                        </Button>
                      </Box>
                    </HStack>
                    <HStack>
                      <Box w="60%">
                        <Text fontWeight="500">Pay when you stay</Text>
                        <UnorderedList fontSize="0.9rem">
                          <ListItem>
                            You will not be charged until your stay
                          </ListItem>
                          <ListItem>
                            Pay the property directly in their local currency
                          </ListItem>
                          <ListItem>
                            Please note that Expedia will not issue a tax
                            invoice. You will receive a commercial receipt for
                            the purpose of the transaction. Upon request, a tax
                            invoice would be issued by the property
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box w="15%"></Box>
                      <Box alignItems="flex-end" w="25%">
                        <Text fontWeight="700" fontSize="1.5rem" align="end">
                          {" "}
                          ₹20000
                        </Text>
                        <Button
                          bg="#3662D8"
                          color="white"
                          _hover={{ bg: "#31087B" }}
                          my="1rem"
                        >
                          Pay at Property
                        </Button>
                      </Box>
                    </HStack>
                  </ModalBody>
                </ModalContent>
              </Modal>
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
                {" "}
                ₹20000
              </Text>
              <br />
              <HStack justifyContent="space-around">
                <Text>Price Details</Text>
                <Button
                  bg="#3662D8"
                  color="white"
                  _hover={{ bg: "#31087B" }}
                  onClick={onOpen}
                >
                  Reserve
                </Button>
              </HStack>
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
                size="xl"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton />
                  <ModalHeader>Your payment options</ModalHeader>

                  <ModalBody>
                    <HStack
                      h="4rem"
                      my="0.5rem"
                      lineHeight="1.1rem"
                      fontSize="0.9rem"
                    >
                      <Box>
                        <Img src="https://a.travel-assets.com/travel-assets-manager/03052020/illustration__free__cancellation__sml.svg" />
                      </Box>
                      <Box>
                        <Text fontWeight="500">
                          Fully refundable before Thu, 24 Nov
                        </Text>
                        <Text>
                          You can change or cancel this stay if plans change.
                          Because flexibility matters.
                        </Text>
                      </Box>
                    </HStack>
                    <HStack my="0.5rem">
                      <Box w="60%">
                        <Text fontWeight="500">Pay Now</Text>
                        <UnorderedList fontSize="0.9rem">
                          <ListItem>
                            We will process your payment in your local currency
                          </ListItem>
                          <ListItem>
                            You can use a valid Expedia coupon
                          </ListItem>
                          <ListItem>
                            Please note that Expedia will not issue a tax
                            invoice. You will receive a commercial receipt for
                            the purpose of the transaction
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box w="20%"></Box>
                      <Box alignItems="flex-end" w="20%">
                        <Text fontWeight="700" fontSize="1.5rem" align="end">
                          
                          ₹{price1}
                        </Text>
                        <Button
                          bg="#3662D8"
                          color="white"
                          _hover={{ bg: "#31087B" }}
                          my="1rem"
                          align="end"
                        >
                          Pay Now
                        </Button>
                      </Box>
                    </HStack>
                    <HStack>
                      <Box w="60%">
                        <Text fontWeight="500">Pay when you stay</Text>
                        <UnorderedList fontSize="0.9rem">
                          <ListItem>
                            You will not be charged until your stay
                          </ListItem>
                          <ListItem>
                            Pay the property directly in their local currency
                          </ListItem>
                          <ListItem>
                            Please note that Expedia will not issue a tax
                            invoice. You will receive a commercial receipt for
                            the purpose of the transaction. Upon request, a tax
                            invoice would be issued by the property
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box w="15%"></Box>
                      <Box alignItems="flex-end" w="25%">
                        <Text fontWeight="700" fontSize="1.5rem" align="end">
                          {" "}
                          ₹{price1}
                        </Text>
                        <Button
                          bg="#3662D8"
                          color="white"
                          _hover={{ bg: "#31087B" }}
                          my="1rem"
                        >
                          Pay at Property
                        </Button>
                      </Box>
                    </HStack>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Rooms;
